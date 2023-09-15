const fs = require('fs')

const getDirectories = path =>
    fs.readdirSync(path, { withFileTypes: true })
        .filter(dir => dir.isDirectory() && !dir.name.startsWith('.'))
        .map(dir => dir.name)

const getFiles = path =>
    fs.readdirSync(path, { withFileTypes: true })
        .filter(dir => dir.isFile())
        .map(dir => dir.name)

;(function() {
    let readme = `# learnings 
my notes from various books/articles/courses/conferences

## table of contents`

    const directories = getDirectories('.')

    directories.forEach(d => {
        readme = readme.concat(`\n\n## ${d.replaceAll('-', ' ')}`)

        const dirFiles = getFiles(d).sort((d1, d2) => {
            if (d1 === 'todo.md') return -1
            if (d2 === 'todo.md') return 1
            return d1 < d2
        })

        dirFiles.forEach(f => {
            const filePath = `${d}/${f}`
            const label = f.replaceAll('-', ' ').replace('.md', '')
            readme = readme.concat(`\n - [${label}](${filePath})`)
        })
    })

    fs.writeFileSync('README.md', readme)
})()
