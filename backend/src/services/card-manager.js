const _ = require('lodash')
const { BAD_REQUEST,  NOT_FOUND } = require('../utils/errors')
const { AppError } = require('../utils')
const { cardModel } = require('../models')


const create = async(body) => {
    const { title , description } = body
    try{
        if(_.isEmpty(title) || _.isEmpty(description)){
            const error = BAD_REQUEST
            error.message = 'All fields are required'
            throw new AppError( error.code, error.message,error.statusCode )
        }
        const card = await cardModel.create({
            title,
            description
        })
        return card;
    }catch(err){
        throw err
    }
}


const update = async(params,body) => {
    const { title, description } = body
    const { card } = params
    try{
        if(_.isEmpty(title)){
            const error = BAD_REQUEST
            error.message = 'Title is required'
            throw new AppError( error.code, error.message,error.statusCode )
        }
        if(_.isEmpty(description)){
            const error = BAD_REQUEST
            error.message = 'Description is required'
            throw new AppError( error.code, error.message,error.statusCode )
        }
        const updateCard = await cardModel.findByIdAndUpdate(card,{ $set:{ title, description }},{ new:true })
        if(!updateCard){
            const error = NOT_FOUND
            error.message = 'Card does not exist'
            throw new AppError( error.code, error.message,error.statusCode )
        }
        return updateCard;
    }catch(err){
        throw err;
    }
}

const deleteOne = async(params) => {
    const { card } = params
    try{
        const deleteCard = await cardModel.findByIdAndDelete(card,{ new:true })
        if(!deleteCard){
            const error = NOT_FOUND
            error.message = 'Card does not exist'
            throw new AppError( error.code, error.message,error.statusCode )
        }
        return deleteCard
    }catch(err){
        throw err;
    }
}


const get = async(params) => {
    const { card } = params;
    try{
        const fetchCard = await cardModel.findById(card)
        if(!fetchCard){
            const error = NOT_FOUND
            error.message = 'Card does not exist'
            throw new AppError( error.code, error.message,error.statusCode )
        }
        return fetchCard;
    }catch(err){
        throw err;
    }
}

const search = async (params) => {
    const { title } = params;

    try {
        const card = await cardModel.findOne({ title: new RegExp(`^${title}$`, 'i') });
        if(!card){
            const error = NOT_FOUND
            error.message = 'Card does not exist'
            throw new AppError( error.code, error.message,error.statusCode )
        }
        return [card];
    } catch (err) {
        throw err;
    }
};


const getAll = async() => {
     try{
        const card = await cardModel.find()
        if(!card){
            const error = NOT_FOUND
            error.message = 'No card exist'
            throw new AppError( error.code, error.message,error.statusCode )
        }
        return card;
    }catch(err){
        throw err;
    }
}

module.exports = { create , update ,deleteOne, get , getAll , search }
