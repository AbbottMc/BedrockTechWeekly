

-   RawMessage
    -   Changed the signature of property withfrom _(string\[\] | RawMessage)\[\]?_  to _(string\[\] | RawMessage)?_  
          
        
-   EntityHealthComponent
    -   Fixed a bug where health could be modified on dead entities ([MCPE-130687](https://bugs.mojang.com/browse/MCPE-130687))
-   Scoreboard
    -   Added _setScore(ScoreboardObjective, ScoreboardIdentity, Number)_
    -   Added _getScore(ScoreboardObjective, ScoreboardIdentity)_
-   ScoreboardObjective
    -   Added _setScore(ScoreboardIdentity, Number)_
    -   Added _getScore(ScoreboardIdentity)_
    -   Added _removeParticipant(ScoreboardIdentity)_
-   ScoreboardIdentity
    -   Added _setScore(ScoreboardObjective, Number)_
    -   Added _getScore(ScoreboardObjective)_
    -   Added _removeFromObjective(ScoreboardObjective)_

