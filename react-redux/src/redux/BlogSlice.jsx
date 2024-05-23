import { createSlice } from '@reduxjs/toolkit'

export const BlogSlice = createSlice({
    name: 'card',
    initialState:[],
    reducers:{
      saveAllBlogs:(state,action)=>{
        // console.log(state)
        return action.payload
      },
    }
})


export const { saveAllBlogs} = BlogSlice.actions
export default BlogSlice.reducer