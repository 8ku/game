---
title: Main Tree
date: 2022-9-24
categories: [MainTree]
tags: [construct]
mermaid: true
pin: true
---

## 结构

```mermaid
classDiagram
    PlayerManager <-- InputHandler
    PlayerManager <-- CameraHandler
    PlayerManager <-- Animator
    PlayerManager <-- PlayerLocomotion
    PlayerManager <-- WeaponSlotManager
    PlayerManager <-- InteractableUI
    InputHandler <-- PlayerController
    InputHandler <-- PlayerAttacker
    InputHandler <-- PlayerInventory
    InputHandler <-- PlayerManager
    InputHandler <-- UIManager
    Item <|-- WeaponItem
    Interactable <|-- WeaponPickUp
    PlayerInventory <-- WeaponItem
    PlayerInventory <-- WeaponSlotManager
    WeaponSlotManager <-- WeaponHolderSlot
    WeaponSlotManager <-- DamageCollider
    WeaponSlotManager <-- Animator
    WeaponSlotManager <-- QuickSlotsUI
    WeaponSlotManager <-- PlayerStats
    PlayerAttacker <-- AnimatorHandler
    PlayerAttacker <-- InputHandler
    PlayerStats <-- AnimatorHandler
    PlayerStats <-- HealthBar
    PlayerStats <-- StaminaBar
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
      	- CheckForInteractableObject()
      	- CameraHandler.FollowTarget()
      	- CameraHandler.HandleCameraRotation()
      	
      Handles Flags(isSprinting, isFalling, isParrying, isInteracting, isInAir)

			- [Define function]CheckForInteractableObject()
    }
    class InputHandler{
    	Belongs: Player
    	Manager action's flags
    	Define function
    	- TickInput()
    	- MoveInput()
    	- HandleRollInput()
    	- HandleAttackInput()
    	- HandleQuickSlotInput()
    	- HandleInteractingButtonInput()
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
    	- TakeStaminaDamage()
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
    	- string right_hand_idle;
    	- string left_hand_idle;
    	- string OH_Light_Attack_1;
    	- string OH_Heavy_Attack_1;
    	- int baseStamina;
    	- float lightAttackMultiplier;
    	- float heavyAttackMultiplier;
    }
    
    class PlayerInventory{
    	Belongs: Player
    	- Load weapon on Slot
    	- Storing picked up weapons
    	define function
    	- ChangeRightWeapon()
    	- ChangeLeftWeapon()
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
    	- DrainStaminaLightAttack()
    	
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
    
    class StaminaBar{
    	Belongs: Canvas - StaminaBar(UI)
			Define function
			- SetMaxStamina()
			- SetCurrnetStamina()
    }
    
    class DamageCollider{
    	Belongs: weapon's prefab
    	use: Add animation event to player's Animation clip
    }

    class QuickSlotsUI{
    	Belongs: Canvas - QuickSlots(UI)
    }
    
    class Interactable{
    	Define function
    	- Interact()
    }
    
    class WeaponPickUp{
    	Belongs: Weapon which can pick up
    	Define function
    	- [override]Interact()
    	- PickupItem()
    }
    
    class InteractableUI{
    	Belongs: Canvas - Interaction Pop Up(UI)
    }
    
    class UIManager{
    	Belongs: Canvas(UI)
    	Define function
    	- OpenSelectWindow();
    }

```

## Input system

1. 安装新版 **InputSystem** 之后，右键新建 Input Actions（命名为 **PlayerController**），生成一个 c# 文件

2. 在 `InputHandler` 中直接调用.
  
   ```csharp
   PlayerController inputActions;
   
   private void OnEnable(){
       if (inputActions == null){
   
       inputActions = new PlayerController;
   
       }
   }
   ```



### Walk

调用 input Actions 里的按键 - 移动

```csharp
public Vector2 movementInput;
PlayerController inputActions;

inputActions.Player.Move.performed += keyboardInput => movementInput = keyboardInput.ReadValue<Vector2>();
```

- inputAction：PlayerController’s name
- Player：Action Map’s name
- Move：Action’s name
- keyboardInput：临时变量，用于传递变量值



### Attack

- 判断按键是否被按下，如果按下，调用 **playerAttacker** 里的 **HandleLightAttack** 方法

- **HandleLightAttack** 方法执行对应的 **animation**
- 武器的伤害用挂载在武器 prefab 上的 **DamageCollider** 脚本触发

```csharp
public bool rb_input; 

inputActions.Player.RightButton.performed += i => rb_input = true;
```







