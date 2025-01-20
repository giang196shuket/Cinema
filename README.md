# Cinema
mobile: 
npx @react-native-community/cli init
 npx react-native start
 //--reset-cache
 npm cache clean --force

//vá thư viện
"scripts": {
    "postinstall": "patch-package"
  },
 npx patch-package <tên thư viện muốn vá>
git add patches/.....patch
git commit -m "Patch library to fix library issue"


// xóa
rm -r node_modules
rm -r package-lock.json
 
frontend: npm run dev
backend: npm run start:dev