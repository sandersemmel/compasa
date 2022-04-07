pwd
GREEN='\033[1;32m'
NC='\033[0m' # No Color



printf "[BUILD ${GREEN} STARTED] ${NC}"
echo 
# CLEAR OLD BUILD FOLDERS
echo cleaning servefront/ folder
rm -R servefront

# CREATE NEW BUILD FOLDERS
echo creating servefront/ folder
mkdir -m 0777 servefront

# Dependencies that the HTML file had to begin with.. bootstrap,isotope etc..
echo creating indexdependencies folder
mkdir -m 0777 servefront/indexdependencies


# COPY FRONTEND
echo copy front/
cp -R front/indexdependencies/css servefront/indexdependencies
cp -R front/indexdependencies/js servefront/indexdependencies
cp -R front/styles servefront
cp -R front/index.html servefront
cp -R front/out.js servefront


echo minify index.html
minify servefront/index.html > servefront/index.min.html
mv servefront/index.min.html servefront/index.html

echo minify indexdependencies styles.css
minify servefront/indexdependencies/css/styles.css > servefront/indexdependencies/css/styles.min.html
mv servefront/indexdependencies/css/styles.min.html servefront/indexdependencies/css/styles.css

echo minify styles styles.css
minify servefront/styles/styles.css > servefront/styles/styles.min.html
mv servefront/styles/styles.min.html servefront/styles/styles.css



: '
echo copy index.html
cp index.html build/

echo copy /js/
cp -R js build/

echo [changing rights] index.js
chmod 0777 build/js/index.js

echo starting to bundle:
browserify build/js/index.js -o build/js/bundle.js


echo [starting to minify files]
echo minify bundle.js
minify build/js/bundle.js > build/js/bundle.min.js

echo minify styles
minify build/styles/styles.css > build/styles/styles.min.css


echo minify index.html
minify build/index.html > build/index.min.html


echo removing unwanted files
echo remove build/js/index.js
rm build/js/index.js

echo remove build/index.html
rm build/index.html


echo rename minified files
mv build/js/bundle.min.js build/js/bundle.js
mv build/index.min.html build/index.html
mv build/styles/styles.min.css build/styles/styles.css


echo remove node_modules
rm -R build/node_modules


'
echo [Build ended]



