const { cardManager , responseManager } = require('../services')

const create = async (request, response) => {
  try {
    const result = await cardManager.create(request.body);
    return responseManager.sendSuccessResponse(response, result, 'Card Added Successfully.');
  } catch (err) {
    return responseManager.sendErrorResponse(response, err);
  }
};

const update = async (request, response) => {
    try{
        const result = await cardManager.update(request.body,request.params);
        return responseManager.sendSuccessResponse(response, result, 'Card Updated Successfully.');
    }catch(err){
        return responseManager.sendErrorResponse(response, err);
    }
}

const deleteOne = async (request, response) => {
    try{
        const result = await cardManager.deleteOne(request.params);
        return responseManager.sendSuccessResponse(response, result, 'Card Deleted Successfully.');
    }catch(err){
        return responseManager.sendErrorResponse(response, err);
    }
}

const get = async (request, response) => {
    try{
        const result = await cardManager.get(request.params);
        return responseManager.sendSuccessResponse(response, result,'Card fetched Successfully.');
    }catch(err){
        return responseManager.sendErrorResponse(response, err);
    }
}

const getAll = async (request, response) => {
    try{
        const result = await cardManager.getAll();
        return responseManager.sendSuccessResponse(response, result,'All Cards fetched Successfully.');
    }catch(err){
        return responseManager.sendErrorResponse(response, err);
    }
}

const search = async(request, response) => {
    try{
        const result = await cardManager.search(request.params);
        return responseManager.sendSuccessResponse(response,result,"Card Searched Successfully")
    }catch(err){
        return responseManager.sendErrorResponse(response, err);
    }
}


module.exports = { create , update , deleteOne , get , getAll , search }