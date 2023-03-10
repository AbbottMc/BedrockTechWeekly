cmd.exe /c npm i @minecraft/server@stable @minecraft/server-ui@stable @minecraft/server-gametest@stable @minecraft/server-admin@stable @minecraft/server-net@stable --save-dev
Set-Location ../
Copy-Item -Path ./node_modules/@minecraft/server/index.d.ts -Destination ./static/typedoc/stable/server.d.ts -Force
Copy-Item -Path ./node_modules/@minecraft/server-gametest/index.d.ts -Destination ./static/typedoc/stable/server-gametest.d.ts -Force
Copy-Item -Path ./node_modules/@minecraft/server-ui/index.d.ts -Destination ./static/typedoc/stable/server-ui.d.ts -Force
Copy-Item -Path ./node_modules/@minecraft/server-net/index.d.ts -Destination ./static/typedoc/stable/server-net.d.ts -Force
Copy-Item -Path ./node_modules/@minecraft/server-admin/index.d.ts -Destination ./static/typedoc/stable/server-admin.d.ts -Force
cmd /k