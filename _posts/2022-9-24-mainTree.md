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
    PlayerManager <-- Animator
    PlayerManager <-- PlayerLocomotion
    InputHandler <-- PlayerController
    InputHandler <-- PlayerAttacker
    InputHandler <-- PlayerInventory
    InputHandler <-- PlayerManager
    Item <|-- WeaponItem
    PlayerInventory <-- WeaponItem
    PlayerInventory <-- WeaponSlotManager
    WeaponSlotManager <-- WeaponHolderSlot
    PlayerAttacker <-- AnimatorHandler
    PlayerAttacker <-- InputHandler
    PlayerStats <-- AnimatorHandler
    PlayerStats <-- HealthBar
    PlayerLocomotion <-- InputHandler
    PlayerLocomotion <-- PlayerManager
    PlayerLocomotion <-- AnimatorHandler
    AnimatorHandler <-- PlayerManager
    AnimatorHandler <-- Animator

    class PlayerManager{
    	Belongs: Player
      Update state
      	- Animator.GetBool("isInteracting")
      	- Animator.GetBool("canDoCombo")
      	- InputHandler.TickInput()
      	- Playerlocomotion.HandleMovement()
      	- Playerlocomotion.HandleRollingAndSprinting()
      	- Playerlocomotion.HandleFalling()
      	- CameraHandler.FollowTarget()
      	- CameraHandler.HandleCameraRotation()
      	
      Handles Flags(isSprinting, isFalling, isParrying, isInteracting, isInAir)
      Connects all other functionality to player.(Other scripts)
    }
    class InputHandler{
    	Belongs: Player
    	Manager action's flags
    	Define function
    	- TickInput()
    	- MoveInput()
    	- HandleRollInput()
    	- HandleAttackInput()
    }
    class PlayerLocomotion{
    	Belongs: Player
    	Define function
    	- HandleRotation()
    	- HandleMovement()
    	- HandleRollingAndSprinting()
    	- HandleFalling()
    }
    
    class PlayerController{
      Create from Input Actions.
    }
    
    class PlayerAttacker{
    	Belongs: Player
    	Define function
    	- HandleWeaponCombo()
    	- HandleLightAttack()
    	- HandleHeavyAttack()
    }
    
    class PlayerInventory{
    }
    
    class PlayerStats{
    	Belongs: Player
    	Handles player's status
    	Define function
    	- SetMaxHealthFromHealthLevel()
    	- TakeDamage()
    }
    class AnimatorHandler{
    	Belongs: Player's Prefab
    	Define function
    	- UpdateAnimatorValue()
    	- PlayTargetAnimation()
    	- CanRotate()
    	- StopRotation()
    	- EnableCombo()
    	- DisableCombo()
    	- OnAnimatorMove()
    }
    
    class CameraHandler{
    	Belongs: Camera.main
    	Define function
    	- FollowTarget()
    	- HandleCameraRotation()
    	- HandleCameraCollisions()
    }
    
    class Item~ScriptableObject~{
    	Define item's icon, name
    }
    
    class WeaponItem{
    	Define weapon's gameobject, isUnarmed, animation 
    	string OH_Light_Attack_1 = Animation clip name
    	Include
    	- GameObject modelPrefab
    	- bool isUnarmed
    	- string OH_Light_Attack_1;
    	- string OH_Heavy_Attack_1;
    }
    
    class PlayerInventory{
    	Belongs: Player
    	- Load weapon on Slot
    }
    
    class WeaponSlotManager{
    	Belongs: Player's Prefab
    	Define funtion
    	- LoadWeaponOnSlot()
    	- LoadLeftHandWeaponDamageCollider()
    	- LoadRightHandWeaponDamageCollider()
    	- OpenLeftDamageCollider()
    	- OpenRightDamageCollider()
    	- CloseLeftDamageCollider()
    	- CloseLeftDamageCollider()
    }
    
    class WeaponHolderSlot{
    	Belongs: Left/Right hand of player's Prefab
    	Define function
    	- UnloadWeapon()
    	- UnloadWeaponAndDestroy()
    	- LoadWeaponModel()
    }
 
    class HealthBar{
    	Belongs: Canvas - HealthBar(UI)
			Define function
			- SetMaxHealth()
			- SetCurrnetHealth()
    }
    
    class DamageCollider{
    	Belongs: weapon's prefab
    	use: Add animation event to player's Animation clip
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









