import FontFaceObserver from 'fontfaceobserver'

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const font = new FontFaceObserver('Roboto')

  font.load().then(() => {
    document.documentElement.classList.add('roboto')
  })
}

export default Fonts
