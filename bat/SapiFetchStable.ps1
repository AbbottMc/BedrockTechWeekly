cmd.exe /c npm i @minecraft/common@1.2.0 @minecraft/server@1.11.0-beta.1.20.80-stable @minecraft/server-ui@1.2.0-beta.1.20.80-stable @minecraft/server-editor@0.1.0-beta.1.20.80-stable @minecraft/server-gametest@1.0.0-beta.1.20.80-stable @minecraft/server-admin@1.0.0-beta.1.20.80-stable @minecraft/server-net@1.0.0-beta.1.20.80-stable --save-dev
Set-Location ../
Copy-Item -Path ./node_modules/@minecraft/common/index.d.ts -Destination ./static/typedoc/stable/common.d.ts -Force
Copy-Item -Path ./node_modules/@minecraft/server/index.d.ts -Destination ./static/typedoc/stable/server.d.ts -Force
Copy-Item -Path ./node_modules/@minecraft/server-editor/index.d.ts -Destination ./static/typedoc/stable/server-editor.d.ts -Force
Copy-Item -Path ./node_modules/@minecraft/server-gametest/index.d.ts -Destination ./static/typedoc/stable/server-gametest.d.ts -Force
Copy-Item -Path ./node_modules/@minecraft/server-ui/index.d.ts -Destination ./static/typedoc/stable/server-ui.d.ts -Force
Copy-Item -Path ./node_modules/@minecraft/server-net/index.d.ts -Destination ./static/typedoc/stable/server-net.d.ts -Force
Copy-Item -Path ./node_modules/@minecraft/server-admin/index.d.ts -Destination ./static/typedoc/stable/server-admin.d.ts -Force
cmd /k