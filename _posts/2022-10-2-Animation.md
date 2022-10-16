---
title: Animation
date: 2022-9-24
categories: [Animation]
tags: [Animation]
mermaid: true
---

## State Machine

### Base Layer

#### Locomotion

- Is Blend Tree
- Include **idle, walking, Running, Sprint** etc basic motion
- Change Position y(move forward) to set move position of motion

| Motion  | Pos X | Pos Y |
| ------- | ----- | ----- |
| idle    | 0     | 0     |
| Walking | 0     | 0.5   |
| Running | 0     | 1     |
| Sprint  | 0     | 2     |



```mermaid
flowchart TD
	subgraph Base Layer
	Entry --> Locomotion
		subgraph Locomotion
		BlendTree --> idle
		BlendTree --> Walking
		BlendTree --> Running
		BlendTree --> Sprint
		end
	end
```



### Right Arm

- Set **Weight to 0.8** in ⚙️
- Create a **Avatar Mask** named **Right Arm**, Set <u>right arm part</u> active in **Humanoid**
- Put Avatar mask in **Mask**
- Create Empty State named **Right Arm Empty**
- Put Animation clip in this layer



```mermaid
flowchart TD
	subgraph Right Arm
		Right_Arm_Idle
	end
```





### Left Arm

- Set **Weight to 0.8** in ⚙️
- Create a **Avatar Mask** named **Left Arm**, Set <u>left arm part</u> active in **Humanoid**
- Put Avatar mask in **Mask**
- Create Empty State named **Left Arm Empty**
- Put Animation clip in this layer



```mermaid
flowchart TD
	subgraph Left Arm
		Left_Arm_Idle
	end
```





### Override(Layer)

- Set **Weight to 1** in ⚙️
- Select Blending to **Override**
  - Use **Override** to replace the animation on previous layers
  - Use **Additive** to add the animation on top of the animation from previous layers
- Create new state **Empty**
- Create new scripts name **ResetAnimatorBool** in **Empty** to reset animation

```csharp
pubic class ResetAnimatorBool: StateMachineBehaviour //notice class
{
  public string targetBool;
  public bool status;
  
  public override void OnStateEnter(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)
  {
    animator.SetBool(targetBool, status);
  }
}
```





```mermaid
flowchart TD
	subgraph Override
		Dead
		Damage --> Empty
		Falling
		Land --> Empty
		Rolling --> Empty
		Backstep --> Empty
		light_attack --> Empty
		heavy_attack --> Empty
		Pick_up --> Empty
	end
```



## Parameters

| Type | Name          | Default Value | memo                                      |
| ---- | ------------- | ------------- | ----------------------------------------- |
| int  | Vectical      | 0             | input value, quote in **AnimatorHandler** |
| int  | Horizontal    | 0             | input value, quote in **AnimatorHandler** |
| bool | isInteracting | false         |                                           |
| bool | canDoCombo    | false         |                                           |



## Play Animation

`AnimatorHandler`

```csharp
public void PlayTargetAnimation(string targetAnim, bool isInteracting)
{
  anim.applyRootMotion = isInteracting;
  anim.SetBool("isInteracting", isInteracting);
  anim.CrossFade(targetanim, 0.2f);
}
```

`Script which need play animation`

```csharp
animatorHandler.PlayTargetAnimation("Pick Up Item", true);
```



### Wait For Second Method

```csharp
private void Update()
{
  StartCoroutine(WaitForSecond());
}


private IEnumerator WaitForSecond()
{
 	yield return new WaitForSeconds(0.35f); 
}
```

