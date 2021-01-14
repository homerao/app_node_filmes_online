const S3 = require('aws-sdk/clients/s3')
const uuid = require('uuid')
const s3 = new S3({credentials:{accessKeyId:process.env.AWS_ID, secretAccessKey:process.env.AWS_SECRET}})
const getFileType = (file) =>{
  let fileName = file.split('.')[0]
  let filetype = file.split('.')[1]
  return filetype
}
const upload = async (path ="/", file, generatedName)=>{
   s3.upload({Bucket:process.env.AWS_BUCKET+path, Key:generatedName,Body:file.buffer  }).on()

}


const  downlaod = async (bucket, file)=>{

}