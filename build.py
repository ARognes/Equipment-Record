# This is ran by the npm package.json build script to run esbuild on all
# js files in src. dist folder is fully built.

import os, shutil, time

start = time.time()

# Copy src to dist without js folder
try:
  shutil.rmtree('./dist')
except OSError as error:
  print('Creating new dist directory')

shutil.copytree('./src/web', './dist/web')
for folderName in os.listdir('./src/app'):
  if folderName != 'js':
     shutil.copytree('./src/app/' + folderName, './dist/app/' + folderName)

# Esbuild bundle all js files in src/app/js  TODO When esbuild is updated use: --target=es2020,chrome58,firefox57,safari11,edge16,node12
for fileName in os.listdir('./src/app/js'):
  command = f'npx esbuild src/app/js/{ fileName } --bundle --format=esm --minify --outfile=dist/app/js/{ fileName }'
  os.system(command)

end = time.time()
print('Bundled in ' + str(end - start))
