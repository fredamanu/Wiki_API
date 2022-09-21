import Article from '../model/article.js'
import ArticleServices from '../services/article.js'

export const findAllArticles = async (req, res, next) => {
  try {
    res.json(await ArticleServices.findAllArticles())
  } catch (err) {
    next(err)
  }
}

export const findAnArticle = async (req, res, next) => {
    try {
      res.json(await ArticleServices.findAnArticle(req.params.articleId))
    } catch (err) {
      next(err)
    }
  }

export const postAnArticle = async (req, res, next) => {
  try {
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    })
    res.json(await ArticleServices.postAnArticle(newArticle))
  } catch (err) {
    next(err)
  }
}

export const updateAnArticle = async (req, res, next) => {
    try {
      const update= {
          title: req.body.title,
          content: req.body.content
      }
      res.json(await ArticleServices.updateAnArticle(req.params.articleId, update))
    } catch (err) {
      next(err)
    }
  }

  export const deleteAllArticles = async (req, res, next) => {
    try {
      res.json(await ArticleServices.deleteAllArticles())
    } catch (err) {
      next(err)
    }
  }

  export const deleteAnArticle = async (req, res, next) => {
    try {
      res.json(await ArticleServices.deleteAnArticle(req.params.articleId))
    } catch (err) {
      next(err)
    }
  }