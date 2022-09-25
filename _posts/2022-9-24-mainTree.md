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
    class PlayerInventory{
    }
    class PlayerStats{
    }
    class AnimationHandler{
    }
    class CameraHandler{
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










