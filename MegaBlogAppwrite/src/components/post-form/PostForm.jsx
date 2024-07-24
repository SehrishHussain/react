import { useForm } from 'react-hook-form'
import React, {useCallback} from 'react'
import {Button, Input, Select, RTE} from '../index'
import appwriteService from '../../appwrite/config'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function PostForm({post}) {
    // watch: kisi field ko conti monitor krna hai tu watch dety hain,
    // setValue: form k ander value set krni hai
    // tu directly value: kr k nai dety react-hook-form mei. So we setvalue via setValues,
    // Control: form ka control
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues:{
            title: post?.title || '', // title: post && post.title ? post.title : '';
            slug: post?.$id || '',
            content: post?.content || '',
            status: post?.status || 'active',
        },
    })
    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)
    // what to do when user submits form: must have sent data. 
    // In react-hook-form data is accessed via register object
    const submit = async(data) => {
           let file = null;

           if (data.image[0]) {
            file = await appwriteService.uploadFile(data.image[0]);
            console.log("uploadFile(data.image[0])");
            if (post && post.featuredImage){
                await appwriteService.deleteFile(post.featuredImage);
                console.log("appwrite delete featuredImage")
            
            }
           }
           if (post) {
            console.log("if post for updatePost blog update")
            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id :  post.featuredImage, // file? data.images[0]
                
            })
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }   
        } else { // when user wants to creates a new form
            if (file) {
                data.featuredImage = file.$id;
                console.log("new post: data.featuredImage = file.$id; ")
            }
            const dbPost = await appwriteService.createPost({
                ...data,
                userId: userData.$id,
            });
    
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);

        }
    }
}
    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []); // why emopty dep arr: cz its updated once in the  beginning  
    React.useEffect(() => { //got watch from react hook form
        const subscription = watch((value, { name }) => {  // value is obj it has input keys and their values n destructd  obj name reps name of form field that was updated
            if (name === "title") { // check if form filed thats UPDATED is title then const slug "slug come from input filed jiska naam slug rakha hai" value is an obj
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe(); //for memory managment optimization
    }, [watch, slugTransform, setValue]);

    return (
         <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
    <div className="w-2/3 px-2">
        <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            {...register("title", { required: true })}
        />
        <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4"
            {...register("slug", { required: true })}
            onInput={(e) => {
                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
            }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
    </div>
    <div className="w-1/3 px-2">
        <Input
            label="Featured Image :"
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
        />
        {post && (
            <div className="w-full mb-4">
                <img
                    src={appwriteService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className="rounded-lg"
                />
            </div>
        )}
        <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4"
            {...register("status", { required: true })}
        />
        <Button type="submit" bgColor={post ? "bg-green-500" : undefined} 
        className="w-full transform transition-transform duration-200 active:scale-95">
            {post ? "Update" : "Submit"}
        </Button>
    </div>
</form>
);
}


