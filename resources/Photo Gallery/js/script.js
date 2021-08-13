const getPaddedNum  = (n) => {
  if(n<10) return `00${n}`
  if(n<100) return `0${n}`
  return n.toString();
}

const PIC_COUNT = 9
const gallery = document.getElementById('photoContainer')

for(let i = 1; i <= PIC_COUNT; i++){
  const image = document.createElement('img')
  image.src = `./img/pic-${getPaddedNum(i)}.jpg`
  const photoItem = document.createElement('div')
  photoItem.classList.add('photo')
  photoItem.appendChild(image)
  gallery.appendChild(photoItem)
}
