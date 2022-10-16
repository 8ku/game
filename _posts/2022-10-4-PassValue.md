---
title: Pass Value
date: 2022-9-24
categories: [Code]
tags: [Functions]
mermaid: true
---

## 技巧

### 通过物体身上的component传值

通过一个物体身上的组件，获取同一个物体身上的另一个组件的技巧。

----

Player:

- PlayerManager.cs
- PlayerInventory.cs
- PlayerLocomition

一个脚本 `WeaponPickUp`通过 `PlayerManager` 获取 `PlayerInventory` `PlayerLocomition`

```csharp
public class WeaponPickUp: Interactable
{
  private void PickUpItem(PlayerManager playerManager)
  {
    PlayerInventory playerInventory;
    PlayerLocomotion playerLocomotion;
    
    playerInventory = playerManager.GetComponent<PlayerInventory>();
    playerLocomotion = playerManager.GetComponent<PlayerLocomotion>();
  }
}
```

