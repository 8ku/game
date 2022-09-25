---
title: Main Tree
date: 2022-9-24
categories: [MainTree]
tags: [construct]
mermaid: true
---

# 结构

```mermaid
classDiagram
    PlayerManager <-- InputHandler
    PlayerManager <-- CameraHandler
    InputHandler <-- PlayerController
<<<<<<< HEAD
    class PlayerManager{
        + String beakColor
        - Handles Update Methods
        - Handles Flags(isSprinting, isFalling, isParrying, isInteracting)
        + Connects all other functionality to player.(Other scripts)
    }
    class InputHandler{
        Belongs: Player
        - Handles input(walking, running, jumping, cameraFollow, sprinting, backstep)
    }
    class PlayerLocomotion{
    }
    class PlayerController{
        - Create from Input Actions.
    }
    class PlayerAttack{
    }
=======
    Item <|-- WeaponItem
    PlayerInventory <-- WeaponSlotManager
    WeaponSlotManager <-- WeaponHolderSlot

    class PlayerManager{
    	Belongs: Player
      + String beakColor
      - Handles Update Methods
      - Handles Flags(isSprinting, isFalling, isParrying, isInteracting)
      + Connects all other functionality to player.(Other scripts)
    }
    class InputHandler{
    	Belongs: Player
      - Handles input(walking, running, jumping, cameraFollow, sprinting, backstep)
    }
    class PlayerLocomotion{
    	Belongs: Player
    }
    
    class PlayerController{
        - Create from Input Actions.
    }
    
    class PlayerAttack{
    }
    
>>>>>>> gh-pages
    class PlayerInventory{
    }
    class PlayerStats{
    }
<<<<<<< HEAD
    class AnimationHandler{
    }
    class CameraHandler{
=======
    class AnimatorHandler{
    	Belongs: Player's Prefab
    }
    
    class CameraHandler{
    	Belongs: Camera.main
    }
    
    class Item~ScriptableObject~{
    
    }
    
    class PlayerInventory{
    	Belongs: Player
    }
    
    class WeaponSlotManager{
    	Belongs: Player's Prefab
    }
    
    class WeaponHolderSlot{
    	Belongs: Left/Right hand of player's Prefab
>>>>>>> gh-pages
    }
```

## 关于 Input system

1. 安装新版 **InputSystem** 之后，右键新建 Input Actions , 生成一个 c# 文件

2. 在 `InputHandler` 中直接调用
  
   ```csharp
   InputActions inputActions;
   
   private void OnEnable(){
       if (inputActions == null){
   
       inputActions = new InputActions;
   
       }
   }
   ```









<<<<<<< HEAD

=======
>>>>>>> gh-pages
