import fs, { readdirSync } from "fs";
import path from "path";

const __dirname = path.dirname(".");
const folders = ["buttons", "carrousels"];

const allFiles = {};

// folders.forEach((folder) => {
//   fs.readdirSync(path.resolve(__dirname, folder), (err, subFolders) => {
//     subFolders.forEach((subFolder) => {
//       fs.readdirSync(path.resolve(__dirname, folder, subFolder), (err, files) => {
//         if(files){
//             files.forEach((file)=>{
//                 const newFile = path.resolve(__dirname,folder,subFolder,file)
//                 allFiles[path.resolve(folder,subFolder)] = newFile
//                 console.log(allFiles)
                
//             })
//         }
//       });
//     });
//   });
// });

folders.forEach((folder)=>{
    readdirSync(path.resolve(__dirname,folder)).forEach((subfolder)=>{
        if(subfolder != 'README.md')
        allFiles[`${folder}${subfolder}`] = path.resolve(__dirname,folder,subfolder,'index.html')
    })
})
console.log(allFiles)