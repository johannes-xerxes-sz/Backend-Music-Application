
//! artistController
/* const postArtistImage = async (req, res ,next) => {
    if(!req.files) throw new Error('Missing image!')
    const file = req.files.files
    if(!file.mimetype.startsWith('image')) throw new Error('Please upload a image file type!')
    if(file.size > process.env.MAX_FILE_SIZE) throw new Error(`Image exceeds size of ${process.env.MAX_FILE_SIZE}`)
    file.name = `photo_${file.name}`
    file.mv(path.resolve(__dirname,`${process.env.FILE_UPLOAD_PATH}`, file.name), async (err) => {
        if(err) throw new Error('Problem uploading photo')
        await Artist.findByIdAndUpdate(req.params.artistId, {image: file.name})
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({success: true, data: file.name})
    })
} */

//og: req.files.file
//! Instructions
/* const postArtistImage = async (req, res, next) => {
        if (req.files) throw new Error (`Missing Images!: ${err.message}`);
        const file = req.files.file
        if (!file.mimetype.startsWith('image')) throw new Error (`Please upload an image file type : ${err.message}`)
        if (file.size > process.env.MAX_FILE_SIZE) throw new Error(`Image exceeds size of ${process.env.MAX_FILE_SIZE} ${err.message}`);
        file.name = `photo_${path.parse(file.name).ext}`
        const filePath = __dirname + '/files/' + file.name 
        file.mv(filePath, async (err) => {
            if (err) throw new Error(`Problem uploading photo ${err.message}`);
            await Artist.findByIdAndUpdate(req.params.artistId,  {image: file.name})
            res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json({ success: true, data: file.name});   
        })
} */
//! sent teams
/* const postArtistImage = async (req, res ,next) => {
    if(!req.files) throw new Error('Missing image!')
    const file = req.files.file
    if(!file.mimetype.startsWith('image')) throw new Error('Please upload a image file type!')
    if(file.size > process.env.MAX_FILE_SIZE) throw new Error(`Image exceeds size of ${process.env.MAX_FILE_SIZE}`)
    file.name = `photo_${path.parse(file.name).ext}`
    const filePath = process.env.FILE_UPLOAD_PATH + file.name
    // file.mv(path.resolve(__dirname,`${process.env.FILE_UPLOAD_PATH}`, file.name), async (err) => {
        file.mv(filePath, async (err) => {
        if(err) throw new Error('Problem uploading photo')
        await Artist.findByIdAndUpdate(req.params.artistId, {image: file.name})
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({success: true, data: file.name})
    })
}
 */