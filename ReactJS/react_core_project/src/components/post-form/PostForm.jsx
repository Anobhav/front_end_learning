import React, {useCallback} from 'react'
import {useForm} from 'react-hook-form'
import {Button, Input, Select, RTE} from '../index'
import appwriteService from '../../services/appwrite'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Condition } from 'appwrite'
function PostForm({ post }) {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        control,
        getValues
    } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active'
        },
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)

    const submit = async (data) => {

        if (post) {
            let file = null

            if (data.image?.[0]) {
                file = await appwriteService.uploadFile(data.image[0])
                if (file) {
                    await appwriteService.deleteFile(post.featuredImage)
                }
            }

            const dbpost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : post.featuredImage
            })

            if (dbpost) {
                navigate(`/post/${dbpost.$id}`)
            }

        } else {

            const file = await appwriteService.uploadFile(data.image[0])

            if (file) {
                const dbpost = await appwriteService.createPost({
                    ...data,
                    featuredImage: file.$id,
                    userId: userData.$id,
                })

                if (dbpost) {
                    navigate(`/post/${dbpost.$id}`)
                }
            }
        }
    }
    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/\s+/g, "-");
        }

        return "";
    }, []);

    return (
        <div>PostForm</div>
    )
}


export default PostForm
