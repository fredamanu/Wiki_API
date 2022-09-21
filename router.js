import express from 'express'
import {
  deleteAllArticles,
  deleteAnArticle,
  findAllArticles,
  findAnArticle,
  postAnArticle,
  updateAnArticle,
} from './controllers/article.js'
const router = express.Router()

router.get('/', findAllArticles)
router.get("/:articleId", findAnArticle)
router.post('/', postAnArticle)
router.put('/:articleId', updateAnArticle)
router.delete('/', deleteAllArticles)
router.delete("/:articleId", deleteAnArticle)

export default router
