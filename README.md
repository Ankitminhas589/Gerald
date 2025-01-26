## Update
I am able to fix one animation bug which was pending in earlier commit 
The issue was slide and rotate of main container was working fine but drawer container was not moving down, I have decribed more details in this PR https://github.com/Ankitminhas589/Gerald/pull/2

Attaching Final Recording here


https://github.com/user-attachments/assets/b5beec81-7ffa-4979-8602-bde585af83d7




## Overview


This project demonstrates a React Native application with a Drawer Navigation integrated with Tab Navigation and Stack Navigation inside the tabs. The drawer menu is implemented as a parent component that holds other child components (such as tab navigation, stack navigation, and screen components). The app uses TypeScript for type safety.

The goal is to provide a simple but well-structured project with optimized React code, and to showcase navigation best practices using React Navigation and react-native-reanimated for smooth animations.


## Features

Drawer Navigation: The app features a drawer that opens from the left, showing the navigation options.
Tab Navigation: Within the Drawer, the user can navigate between different screens using bottom tabs.
Stack Navigation: Each tab contains a stack of screens, with Home containing two stack screens (Screen1 and Screen2).
Reanimated Animations: The drawer animation and tab transitions are smooth and dynamic using react-native-reanimated.
TypeScript: The app is written in TypeScript for type safety and code scalability.

## Notes:

- **Platform**: The assignment was tested only on iOS due to time constraints.
- **Fonts**: The app doesn’t currently implement responsive design, though ideally, scalable fonts should be used for better accessibility and consistency across different devices.
- **Drawer Animation down**: The animation where the drawer moves down is not implemented yet but slide and rotate is working. The issue arises from not being able to access the drawer progress value outside the DrawerNavigator. I Plan to find a ideal solution for accessing the drawer’s progress to implement the animation feature soon.


## Recording:

https://github.com/user-attachments/assets/7cf7bc15-5d7a-44b4-81b0-28517f738359

