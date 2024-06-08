//  Ye bs ek function bnayega or usko export krega
const asyncHandler = (requestHandler) => {
    () => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) =>next(err))
    }
}

export { asyncHandler }







/*
const asyncHandler =()=>{()=>{}}
const asyncHandler =(func)=>()=>{}
const asyncHandler =(func)=> async ()=>{}
high order function --> ek function k andr dusra function
This is the try and catch statement


const asyncHandler =(fn)=> async (err, req, res, next) => {
    try {
        await fn(err, req, res, next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}*/