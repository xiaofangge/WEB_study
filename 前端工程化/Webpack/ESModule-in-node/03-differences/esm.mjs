import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
console.log(__filename)

const __dirname = dirname(import.meta.dirname)
console.log(__dirname)
