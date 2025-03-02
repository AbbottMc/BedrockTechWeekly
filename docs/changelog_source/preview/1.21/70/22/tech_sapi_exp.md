

-   `World`
    -   Added `getDifficulty(): Difficulty` method to beta. This method gets the worlds current game difficulty.
    -   Added `setDifficulty(difficulty: Difficulty): void` method to beta. This method sets the worlds current game difficulty. 
-   `ActionFormData`
    -   Added method `header(text: minecraftserver.RawMessage): ActionFormData;`. It adds a header into the form.
    -   Added method `label(text: minecraftserver.RawMessage): ActionFormData;`. It adds a label into the form.
-   `ModalFormData`
    -   Added method `header(text: minecraftserver.RawMessage): ModalFormData;`. It adds a header into the form.
    -   Added method `label(text: minecraftserver.RawMessage): ModalFormData;`. It adds a label into the form.
-   Added new script module `@minecraft/diagnostics` version 1.0.0-beta. This module is dedicated server only for now and allows script modules to connect their script packs to [Sentry](https://sentry.io/) . This enables remote error tracking and monitoring for script packs. 

