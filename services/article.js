import Article from "../model/article.js"

const findAllArticles = async()=>{
    const articles = await Article.find({})
    if(!articles){
        throw Error("no article was found")
    }else{
        return articles
    }
}

const findAnArticle = async(articleId)=>{
    const article = await Article.findById(articleId)
    if(!article){
        throw Error(`article with id ${articleId} was not found`)
    }else{
        return article
    }
}

const postAnArticle = async(article)=>{
  const newArticle = await article.save()
   return newArticle
}

const updateAnArticle = async(articleId, update)=>{
     await Article.findOneAndUpdate({_id:articleId}, update)
    const updatedArticle = await Article.findById(articleId)
    if(!updatedArticle){
        throw Error(`article with id ${articleId} was not found`)
    }else{
        return updatedArticle
    }
}

const deleteAllArticles = async()=>{
   return await Article.deleteMany({})
   
}

const deleteAnArticle = async(articleId)=>{
    return await Article.deleteOne({_id: articleId}) 
 }

export default{
    findAllArticles,
    findAnArticle,
    postAnArticle,
    updateAnArticle,
    deleteAllArticles,
    deleteAnArticle
}