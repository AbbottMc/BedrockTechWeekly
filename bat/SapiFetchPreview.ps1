cmd.exe /c npm i @minecraft/server@beta @minecraft/server-ui@beta @minecraft/server-gametest@beta @minecraft/server-admin@beta @minecraft/server-net@beta --save-dev
Set-Location ../
Copy-Item -Path ./node_modules/@minecraft/server/index.d.ts -Destination ./static/typedoc/preview/server.d.ts -Force
Copy-Item -Path ./node_modules/@minecraft/server-gametest/index.d.ts -Destination ./static/typedoc/preview/server-gametest.d.ts -Force
Copy-Item -Path ./node_modules/@minecraft/server-ui/index.d.ts -Destination ./static/typedoc/preview/server-ui.d.ts -Force
Copy-Item -Path ./node_modules/@minecraft/server-net/index.d.ts -Destination ./static/typedoc/preview/server-net.d.ts -Force
Copy-Item -Path ./node_modules/@minecraft/server-admin/index.d.ts -Destination ./static/typedoc/preview/server-admin.d.ts -Force
cmd /k