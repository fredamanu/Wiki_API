import Article from "../model/article.js"

const findAllArticles = async()=>{
    const articles = await Article.find({})
    if(!articles){
        throw Error("no article was found")
    }else{
        return articles
    }
}


export default{
    findAllArticles
}