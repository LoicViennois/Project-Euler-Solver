export let assetsFolder = './src/assets'

if (process.env.NODE_ENV === 'production') {
  assetsFolder = './dist/assets'
}
