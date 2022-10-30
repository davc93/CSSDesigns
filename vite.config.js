import {defineConfig} from 'vite'
import {resolve} from 'path'
import {readdirSync} from 'fs'

const allFiles = {};
const folders = ["buttons", "carrousels"];
folders.forEach((folder)=>{
    readdirSync(resolve(__dirname,folder)).forEach((subfolder)=>{
        if(subfolder != 'README.md')
        allFiles[`${folder}${subfolder}`] = resolve(__dirname,folder,subfolder,'index.html')
    })
})

export default defineConfig({

    build:{
        rollupOptions:{
            input:{
                ...allFiles
            }
        }
    }
})
