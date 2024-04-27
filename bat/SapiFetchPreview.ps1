cmd.exe /c npm i @minecraft/common@1.2.0-rc.1.20.80-preview.21 @minecraft/server@1.12.0-beta.1.21.0-preview.23 @minecraft/server-editor@0.1.0-beta.1.21.0-preview.23 @minecraft/server-ui@1.2.0-beta.1.21.0-preview.23 @minecraft/server-gametest@1.0.0-beta.1.21.0-preview.23 @minecraft/server-admin@1.0.0-beta.1.21.0-preview.23 @minecraft/server-net@1.0.0-beta.1.21.0-preview.23 --save-dev
Set-Location ../
Copy-Item -Path ./node_modules/@minecraft/common/index.d.ts -Destination ./static/typedoc/preview/common.d.ts -Force
Copy-Item -Path ./node_modules/@minecraft/server/index.d.ts -Destination ./static/typedoc/preview/server.d.ts -Force
Copy-Item -Path ./node_modules/@minecraft/server-editor/index.d.ts -Destination ./static/typedoc/preview/server-editor.d.ts -Force
Copy-Item -Path ./node_modules/@minecraft/server-gametest/index.d.ts -Destination ./static/typedoc/preview/server-gametest.d.ts -Force
Copy-Item -Path ./node_modules/@minecraft/server-ui/index.d.ts -Destination ./static/typedoc/preview/server-ui.d.ts -Force
Copy-Item -Path ./node_modules/@minecraft/server-net/index.d.ts -Destination ./static/typedoc/preview/server-net.d.ts -Force
Copy-Item -Path ./node_modules/@minecraft/server-admin/index.d.ts -Destination ./static/typedoc/preview/server-admin.d.ts -Force
cmd /k