# This is ran by the npm package.json build script to run esbuild on all
# js files in src. This builds the dist folder with uncondensed JavaScript.

import os, shutil, time

start = time.time()

# Copy src to dist without js folder
try:
  shutil.rmtree('./dist')
except OSError as error:
  print('Creating new dist directory')

shutil.copytree('./src/web', './dist/web')
for folderName in os.listdir('./src/app'):
  shutil.copytree('./src/app/' + folderName, './dist/app/' + folderName)

# Run after copySrcToDst.py
# Esbuild bundle all js files in dist/app/js  TODO When esbuild is updated use: --target=es2020,chrome58,firefox57,safari11,edge16,node12
for fileName in os.listdir('./dist/app'):
  if (os.path.exists(f'dist/app/{ fileName }/index.js')):
    command = f'npx esbuild dist/app/{ fileName }/index.js --bundle --allow-overwrite --format=esm --outfile=dist/app/{ fileName }/index.js'
    os.system(command)

for fileName in os.listdir('./dist/app/global/js'):
  command = f'npx esbuild dist/app/global/js/{ fileName } --bundle --allow-overwrite --format=esm --outfile=dist/app/global/js/{ fileName }'
  os.system(command)

end = time.time()
print('Bundled in ' + str(end - start))
