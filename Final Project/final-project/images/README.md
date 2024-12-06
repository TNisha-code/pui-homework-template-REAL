<mark>**Note that this document order from FP4 -> FP1**</mark>

<mark>Please sign up for the study</mark> at [https://tinyurl.com/pui-study](https://tinyurl.com/pui-study) to allow us to use your submission to create a better GenAI assistant for designers!

---

# **FP4 \- Final Project Writeup**

Feel free to refer to this [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) to make your writeup more organized, and you can preview your markdown file in VSCode [Markdown editing with Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview). 


## Part 1: Website Description

My website introduces a novel project management tool inspired by the simplicity and effectiveness of sticky notes. This idea came from a need I observed among new project managers: an easy way to capture action items and tasks during meetings without feeling overwhelmed. Designed with beginners in mind, this digital solution captures the convenience of physical sticky notes while addressing their common shortcomings, such as falling off surfaces or getting misplaced, and makes the process more efficient.

The purpose of my website is to showcase this tool as the ideal way to manage quick tasks and meeting notes, ensuring nothing important slips through the cracks. Unlike traditional sticky notes, these digital stickies are always accessible and can be refreshed daily to maintain a clean, focused workspace. The tool is designed for use on tablets and laptops, making it perfect for project managers on the go. The system is also intuitive, allowing new users to adopt it quickly and easily.

The target audience includes new project managers, team leads, freelancers, and anyone who needs a reliable, organized system for managing tasks in real time. By focusing on simplicity and accessibility, this tool empowers users to stay on top of their responsibilities without the steep learning curve of more complex project management systems. Its customizable features make it adaptable to different workflows, offering users the flexibility they need.

This project is currently focused on solving the most immediate challenges for new project managers. Given more time, I would like to enhance the tool with additional features, such as advanced organization options, reminders, and ways to easily share tasks with teammates. These improvements would make the tool even more versatile and collaborative, further supporting project managers in their daily responsibilities.

By addressing the needs of new project managers with a simple and effective approach, this tool lays the foundation for a more organized and productive workflow, with the potential to grow into a streamlined solution for a larger audience.

I enjoyed building it and sort of wish we started at the begining of the year, so that there was more time to refine it and take it even further.

## Part 2: User Interaction


1.  Click on "Add a task" field: 
* Interaction type: Click on the task input field.
* How to reproduce: The user will click the "Add a task" text box to begin typing the task description.
2. Enter task text and select a due date:
* Interaction type: Type in the text field and select a due date from a date picker.
*   How to reproduce: The user will type the task description and then click on a calendar icon to choose, a priority or due date (if needed) from a pop-up calendar.
3. Click on the "+ icon" to add a subtask:
* Interaction type: Click on the “+” icon next to a task.
* How to reproduce: Once a task is created, the user clicks the small “+” icon next to the task to open a subtask input field.
4. Check the box to mark the task as completed:
* Interaction type: Click on a checkbox beside the task.
* How to reproduce: The user clicks a checkbox next to a task to mark it as completed, which can then be filtered by the ALl, Comepleted and Pending filter buttons.
5. Click on the trash icon to delete a task:
* Interaction type: Click on the trash icon next to a task.
* How to reproduce: The user clicks the trash icon on the right side of the task to delete it. 

## Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.

1. CSS Animations (Background Animation and Popup Animation)

   * Why did you choose to use it over other alternatives? I chose CSS animations for their simplicity and ability to create engaging effects without needing external libraries. These animations provide visual appeal and improve the user experience.
   * How you used it? I used CSS animations to create a smooth background gradient shift using the @keyframes rule and to animate the popup content with a sliding effect. These animations are triggered when the page loads and when the popup is displayed.
   * What does it add to your website? The animations add a dynamic visual experience that enhances the aesthetic appeal of the website. The animated gradient background creates a calm, visually engaging effect, while the popup animation adds a smooth transition for user interaction.

2. Font Awesome
   * Why did you choose to use it over other alternatives? Font Awesome was chosen because it has a lot of useful icons and integrated easily into the code to enhance the overall design. 

   * How you used it? I used Font Awesome to include icons such as the trash can and checkmark icons, which enhance task interaction (e.g., deleting or completing tasks). These icons are easily integrated by linking the Font Awesome CDN.

   * What does it add to your website? Font Awesome adds visual clarity to the task management interface with recognizable icons for pm users. 

## Part 4: Design Iteration

During the development of my website, I iterated on the design based on feedback from other students and in lab testing. One key change came after testing usability on iPads and laptops, which revealed the need to optimize for both devices, ensuring the animations and layout were responsive. 

I also considered removing the dropbox feature, as it was deemed unnecessary, streamlining the interface. In response to feedback, I experimented with different fonts and styling to improve readability and aesthetic appeal, and I explored using a more generic trashcan icon for deleting items, potentially creating a custom one in Illustrator. 

Additionally, I adjusted the buttons for better contrast to enhance accessibility. Given the time constraints, I added a pre-loading screen with instructions as students said it might help new Project Managers, though I implemented temporary storage to prevent it from appearing too often. 

These changes were all made with the goal of creating a more intuitive and visually cohesive site, based on both user testing and feedback.

## Part 5: Implementation Challenge

* I switched from jQuery to CSS animations for better performance and simplicity.
* CSS transitions had limits for complex interactions, so I rethought how to trigger animations.
* I decided whether to keep the dropbox and worked on balancing interactive elements, fonts, and button styles.

## Part 6: Generative AI Use and Reflection

  For my project, I used ChatGPT AI tools on and off, depending on what I was working on. I often asked the AI for examples or guidance when I needed it, but I also liked to dive in and figure things out myself. I wanted to understand how everything fit together, so I experimented through trial and error. When I hit a wall, though, the AI was super helpful in pointing me in the right direction. The goal of my project is to create a welcoming entry point for new project managers who might feel overwhelmed by traditional project management software. 
  For the design of the website, I used AI tools to help troubleshoot CSS issues when things weren’t working correctly. Since the tool was going to be used primarily on tablets and laptops, it was crucial that the design worked well across those devices. The AI helped me with suggestions on color schemes and button placements, which were helpful since I was often working alone and needed another perspective. 
  
  Once I had some suggestions from the AI, I took a hands-on approach and experimented with different layouts and button styles. This trial-and-error process was essential for me to understand UI/UX design principles and how users would interact with the tool. The tool’s design is high-contrast color schemes, and simple keyboard navigation to make it easier for users with visual impairments.
   
  For coding, I turned to the AI to point me to website or snippets to learn more about  functionality like changing the background color and animations. At first, I used jQuery for the animations, but then switched to CSS animations, which turned out to be much more straightforward. When I got stuck I asked the AI to provide examples and how certain components worked, I spent a lot of time on trial and error to make sure everything worked properly and that I understood how the different components interacted.
  
  As the tool focuses on simplicity and ease of use, I kept the code clean and straightforward to ensure the system was efficient and easy to maintain. When I wasn't sure if two pieces of code were clashing I would ask for guidance from the AI to optimize the code to make sure the website ran smoothly. 
  
  After I had a basic design in place, I tried the website on iPads. The feedback I got from students and users helped me adjust the layout so everything looked good and worked well on both tablets and laptops. The design needed to be responsive, so I made sure it didn’t break when viewed on these two screen sizes. I asked the ai about sizing recommendations and the AI pointed out some issues, like too small text size for tablets, and that was a huge help. By fixing these small problems early, I was able to make the site more user-friendly and visually accessible.
  
  In the end, combining my hands-on approach with the AI tools helped me build a simple, functional, and user-friendly project management tool. The new project task sticky tool focuses on offering an accessible experience for new project managers, helping them stay organized without the overwhelming complexity of traditional software. By emphasizing simplicity, and accessibility, this tool improves the project management process, making it a more straightforward and enjoyable experience. Moving forward, I plan to the AI as a sounding board for new ideas and testing new libraries to add more features and improve the tool, especially as I work on making it even more interactive and collaborative for users.


### Usage Experiences by Project Aspects

Feel free to edit the column \_ (other?) or add more columns if there's any other aspect in your project you've used the GenAI tools for.

For the following aspects of your project, edit the corresponding table cell to answer:
- *Usage*: Whether you used / did not use this tool for the aspect. Enter [Yes/No]
- *Productivity*: Give a rating on whether this tool makes your productivity for X aspect [1-Much Reduced, 2-Reduced, 3-Slightly Reduced, 4-Not Reduced nor Improved, 5-Slightly Improved, 6-Improved, 7-Much Improved].

| Tool Name | Ratings | design | plan | write code | debug | \_ (other?) |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| ChatGPT | Usage | Yes/No | No | Yes | Yes | N/A |
| ChatGPT | Productivity | 5 | 0 | 6 | 7 | 0 |
| Tool2| Usage | Yes/No | Yes/No | Yes/No | Yes/No | Yes/No |
| Tool2 | Productivity | 1~7 | 1~7 | 1~7 | 1~7 | 1~7 |


### Usage Reflection

> Impact on your design and plan 
* It matched my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. ChatGPT: I did not need a complex library to create cohesive animations
  2. I planned to use the AI tool as a reference which was helpful.
* It did not match my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. The AI tool works as I thought it would. Although I used users/students for more visual and workflow quesitons.
  2. I did not have any expectations issues.
* GenAI tool did/did not influence my final design and implementation plan because … For example, 
  1. The AI did not influence my designs as most of the desining was done away from my computer when interviewing folks and colelcting user feedback.
  2. The AI enriched and helped me when I got stuck.

> Use patterns
* I accepted the generations when …  For example, 
  1. When I encountered conflicting code, I would consult the AI tool and also cross-reference with online resources.
  2. For example, I ran into an issue with JavaScript where the event listeners weren't working as expected. After spending several hours debugging, I asked the AI tool for advice, and it quickly pointed out that I had a syntax error.

* I critiqued/evaluated the generated suggestions by … For example, 
  1. I evaluated the AI-generated suggestions based on how well they aligned with my design and learning goals.
  2. For instance, when the AI suggested merging the script for two buttons to improve efficiency, I decided not to follow it. I felt that keeping them separate would help me stay more organized, especially since I’m still learning. So, I chose not to prioritize efficiency in this case.


> Pros and cons of using GenAI tools
* Pros
  1. Support when debugging
  2. Providing answer to syntax questions while learning
* Cons
  1. Must not be taken at face value and should be compared with other sources as the first answer is not always the best or right answer
  2. Should have aplan first as AI tool may not understand the overall goals


### Usage Log

Document the usage logs (prompts and chat history links) for the GenAI tools you used. Some tools may not have an easy way to share usage logs, just try your best! Some instructions for different tools:

1. [ChatGPT](https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq) / [Gemini](https://support.google.com/gemini/answer/13743730?hl=en&co=GENIE.Platform%3DDesktop): share the anonymous link to all of your chat histories relevant to this project
2. [GitHub Copilot (VSCode)](https://code.visualstudio.com/docs/copilot/copilot-chat#:~:text=You%20can%20export%20all%20prompts%20and%20responses%20for%20a%20chat%20session%20in%20a%20JSON%20file%20with%20the%20Chat%3A%20Export%20Session...%20command%20(workbench.action.chat.export)%20in%20the%20Command%20Palette.): export chat histories relevant to this project.

- I checked, and I didn't have save turned on for ChatGPT. Let me know if you'd like me to recreate any of the questions I can remember.


---

# **FP3 \- Final Project Check-in**

Throughout the project, I followed my initial implementation plan, utilizing tools as needed if I got stuck for questions. The AI was particularly helpful for resolving syntax issues, providing quick solutions when I encountered errors or needed clarification. While the overall plan remained consistent, I adapted based on the AI's ability to troubleshoot and direct me to more reading/webesites. I also made sure to commit my code and ensure that changes were documented.

## Implementation Plan Updates

- Testing Usability on iPads and Laptops:
Focus on testing the application across common devices like iPads and laptops to ensure the interface is responsive, functional, and user-friendly on these platforms.
- Animations:
Implement subtle animations to enhance user interaction, particularly with buttons, task additions, and popups. Ensure animations do not interfere with usability.
- Streamlining Features:
Consider removing the dropdown (possibly the priority selection dropdown) if it’s determined to be unnecessary for the task-tracking process, simplifying the user interface.
- Font and Styling Updates:
Experiment with different fonts and styling elements to improve the visual appeal and readability, aiming for a clean, modern design.
- New Delete Icon:
Replace the current delete icon with a more recognizable design, such as a generic trash can, possibly created in Illustrator for custom styling.
- Button Contrast Adjustments:
Experiment with button designs and colors to ensure good contrast and visibility, improving accessibility and user experience.
- Pre-Loading Screen (Time Permitting):
If time allows, implement a pre-loading screen that provides instructions for users on how to navigate the app, using temporary storage to ensure it doesn’t show repeatedly.

## Generative AI Use Plan Updates

- Used generative AI for advice and clarifications on best practices when I was unsure about certain JavaScript functions I iplemented and didn't work the first few tries.

- Used AI to check my code's functionality as I tested different parts or pulled samples from W3 sources.

- Overall AI was a helpful tool for learning new techniques as I reviewed inclass lecture notes, providing quick answers to specific questions about coding conflicts or syntax.


Remember to keep track of your prompts and usage for [FP4 writeup](#part-6-generative-ai-use-and-reflection).

- I checked, and I didn't have save turned on for ChatGPT. Let me know if you'd like me to recreate any of the questions I can remember.

---

# **FP2 \- Evaluation of the Final project**

## Project Description

Project management tools are important for organizing tasks, tracking progress, and meeting deadlines. They enhance collaboration and streamline workflows. The goal of this prototype is to create easy-to-use tool that help beginners manage their projects effectively.


## High-Fi Prototypes

### *Prototype 1*

<img src="/Users/tvsmith/Documents/GitHub/pui-homework-template-REAL/Final Project/final-project/images/HIFI1-image.png" alt="first idea">

Feedback Insights -
Participants shared some helpful feedback during the usability test, pointing out important areas for improvement. Users felt that the tool might be too simple, especially for those looking for more advanced features found in other project management software. They worried that while it’s great for beginners, a lack of advanced options could turn off experienced project managers.

Additionally, users had trouble finding the option to delete tasks, which led to some frustration. They expected this feature to be easy to access. Moving tasks into different phases also proved challenging, as the navigation wasn’t as intuitive as they hoped. This feedback highlights the need for a more balanced feature set and better task management options. By addressing these concerns, we can make the tool work well for both newcomers and those who need more complex project management capabilities.

### *Prototype 2*
<img src="/Users/tvsmith/Documents/GitHub/pui-homework-template-REAL/Final Project/final-project/images/HIFI2-pro.png" alt="first idea">

Feedback Insights - 
Users preferred the filtering option because it made managing tasks a lot easier. I noticed their hands would pause as they tried to decide how to do this. They found it helpful once they learned how to quickly narrow down what they needed to focus on.

However, some users felt that the Project Milestone Tracker could be overwhelming. When too many milestones were displayed at once, it created confusion and made it hard to see what was most important.

Additionally, participants were curious about subtask and privacy settings. They wanted to know if the board would be private or if it could be shared with others. This feedback shows that users are looking for clarity on collaboration features and a more streamlined way to manage their tasks without feeling lost. By addressing these points, I can make the tool more user-friendly and effective.
…

## Usability Test

Usability Test 

When I defined the main goals for the usability test, I wanted to learn how new users interacted with the tool and identify any challenges they might face. I briefed the evaluators on the overall goal of the project management tool, explaining its purpose and the key features. This included details about how users can create tasks and set priorities, helping them understand what to expect during the test.

Usability Test

Next, I selected a group of individuals who were new to project management. I wanted to ensure that their fresh perspective would provide valuable insights. Each participant was given specific tasks to complete, like creating a project task and describing the typical information that should be included. They were also asked to prioritize and filter tasks to see how easily they could navigate these features.

As they worked through these tasks, I observed their interactions closely and took notes. I encouraged participants to speak their thoughts aloud while they navigated the tool. This "think-aloud" approach was really helpful; it allowed me to understand their thought processes and pinpoint any confusion or difficulties they encountered along the way.

Feedback

After completing the tasks, I sat down with each participant to discuss their experience. I asked open-ended questions to encourage detailed feedback about what they liked, what frustrated them, and any suggestions they had for improvement. I documented all their insights, which revealed common themes and areas that need attention.

This feedback will be useful in refining the tool. By understanding how new users interact with the features and what challenges they face, we can make informed changes to enhance usability and overall user satisfaction. The goal is to create a tool that is not only functional but also intuitive and welcoming for all users. 

## Updated Designs

<img src="/Users/tvsmith/Documents/GitHub/pui-homework-template-REAL/Final Project/final-project/images/Update Design1.png" alt="first idea">

<img src="/Users/tvsmith/Documents/GitHub/pui-homework-template-REAL/Final Project/final-project/images/priority.png" alt="first idea">

Feedback Design Changes:

Improved Task Management

To enhance the user experience, I added a clear option for deleting tasks, which had previously caused frustration among users. Additionally, I simplified the process of moving tasks between phases by implementing a drag-and-drop feature. This change makes task management much more intuitive and user-friendly, allowing users to organize their projects more efficiently and effectively.

Enhanced Filtering Features

I also improved the filtering options, enabling users to customize how tasks are displayed based on criteria such as priority and due date. This enhancement allows users to quickly find and manage tasks according to their needs, making navigation simpler and aligning with their preference for a more straightforward interface. Overall, these changes will create a smoother and more enjoyable user experience.


## Feedback Summary

 Initially, some folks were concerned that the tool might be too simple, potentially pushing away users who want more advanced features. This earlier feedback highlighted the need to strike a balance between being user-friendly and offering enough functionality. It’s important that beginners feel comfortable using the tool while ensuring it doesn’t feel outdated or limiting for experienced users.

User feedback also pointed out issues with the task deleting. Users noted that displaying too many task at once could overwhelm users and lead to confusion. This reinforced the idea from the earlier feedback that I needed to streamline how tasks and deadlines are presented. I focused on simplifying the layout and prioritizing so users can easily see what matters most without feeling overloaded.

Taking both the initial and user feedback into account, I implemented features that will hopefully support a broader audience. While maintaining a straightforward design for beginners, I added advanced options like task priority and date for those who need more info. This way, everyone can find value in the tool.

Overall, the combination of earlier feedback and user insights helped guide my design decisions. By addressing concerns about simplicity and the risk of overwhelming users, my goal is to create a tool that’s intuitive and effective for all types of project managers. The goal is to help users feel confident and in control of their projects, no matter their experience level.

## Milestones

Implementation Plan for Simplified Management Tool for Tasking - 
The implementation plan for developing the Simplified Management Tool for tasking outlines key tasks and deadlines over several weeks to ensure successful project completion.

Week 9 (Oct 28 - Nov 1) is important for develioping the baseline for the project. During this week, I will finalize and submit Final Project 1 (FP1) and Final Project 2 (FP2). Both projects will require careful refinement based on initial feedback. 

Week 10 (Nov 4 - Nov 8) is designated for work travel, which may limit project development.

In Week 11 (Nov 11 - Nov 15), I will switch focus back to refining the design of the Simplified Management Tool. This will involve including insights gained from user testing and feedback received on the earlier project submissions and colleagues. Additionally, I will prepare and submit Final Project 3 (FP3), integrating the modifications I made to the tool.

Moving into Week 12 (Nov 18 - Nov 22), I will continue refining the design to enhance usability and functionality. This week includes the due dates for Final Project 4 (FP4) and its other write-up; though not sure if this is still valid as it is not on the asisgnments page on canvas yet. If so, these submissions will include the collection of my efforts and should include the feedback gathered throughout the project.

Week 13 (Nov 25 - Nov 29) Is the Thanksgiving Holiday, a time to break as campus will be closed the last few days of that week. I will use this break to rest.

Week 14 (Dec 2 - Dec 6) will focus on final reviews and adjustments to the Simplified Management Tool for tasking, my goal is to hopefully have everything refined and submitted before this time. However I may need the last week for team input and presentation. This plan will help keep the project tool development on track hopefully help me prove successful in this class.

### *Implementation Plan*

- [X] Week 9 Oct 28 \- Nov 1:
  - [X] FP1 due, Refine
   - [X] FP2 due, Refine
  
- [ ] Week 10 Nov 4 \- Nov 8:   
  - Work Travel

- [ ] Week 11 Nov 11 \- Nov 15:  
   - [] Refine Design
    - [] FP3 due

- [ ] Week 12 Nov 18 \- Nov 22:   
   - [] Refine Design
    - [] FP4 due (? - not on Canvas)
    - [] FP4 Writeup due (? - not on Canvas)
- [ ] Week 13 Nov 25 \- Nov 29:  
  - [ ] Thanksgiving  

- [ ] Week 14 Dec 2 \- Dec 6:  
  

### *Libraries and Other Components*

Evalauting JS libraries
 


## Generative AI Use Plan

As I proceed in my work to implment a Simplified Project Management Tool, I will likley leverage generative AI tools in several key ways to support my development process.

First, I will may use AI to deepen my understanding of JavaScript library implementation. While I have a foundational knowledge, there are always details and best practices that can be overlooked. By asking specific questions related to new libraries I may use, I can gain insights into more efficient ways to implement features, which will save me time and improve the overall quality of the tool.

When I encounter challenges during the refinement phase, I may turn to AI as a quick reference guide. Instead of getting stuck for long periods, I can ask specific questions about coding issues or implementation strategies that may not be working. This immediate access to information will help me maintain momentum and keep the work moving forward.

Additionally, I may use generative AI to help me find examples and resources that are relevant to my project task tool goals. If I need to understand a specific concept or functionality better, I can ask the AI to point me to tutorials, documentation, or sample code. This will be particularly useful as I want to learn more about best practices in project management tool development.

Lastly, I’m not entirely sure yet, but I may rely on AI to ensure I’m using common beginner-friendly terminology when discussing project management tools. This is important for creating an accessible and environment for new users. By checking my language and ensuring clarity, I can make the tool beginner user-friendly and meets the needs of my beginner PM audience.

Overall, incorporating generative AI tools into my implementation process will help me lear on the go, act as a support for problem-solving, and support better communication, ultimately leading to a more effective project management tool.

### *Tool Use*

ChatGPT

I will use it for quick coding questions and to clarify ideas related to JavaScript libraries. It can help me think through some issues, understand bettwe with examples, and find beginner-friendly PM resources.

I will not use it for really technical code work because it should not be used as a main source of truth as it can make mistakes. 

GitHub 

I will use it to assist with managing coding from Visual Studio. It can help me by tracking changes, and providing real-time modification heads up on my code as I write.

I will not rely on it for other trakcing needs as it can become hard to see what has changed if I bundle changes vs push code consistnantly back to my repository.

Visual Studio

I will use it for developing code, reviewing my work, and managing version control through Git. This tool is essential for writing, testing, and debugging my tool code effectively.

I will not expect it to offer guidance on project management strategies or user interface design, as it primarily focuses on code development rather than broader project process.


### *Responsible Use*

I believe using AI as a reference will be helpful for answering questions, but it's important to cross-check with other resources and gather input from other soruces. This way, I can avoid taking information at face.

---

# **FP1 \- Proposal for Critique**

## Idea Sketches

### *Idea 1*

[Idea 1 - Simplified Approaches for Beginners]
<img src="/Users/tvsmith/Documents/GitHub/pui-homework-template-REAL/Final Project/final-project/images/Idea1.png" alt="first idea">

The goal of the Simplified Approaches for Beginners project management tool is to create a welcoming entry point for new managers who might feel daunted by traditional project management software. Many existing tools come packed with features that, while powerful, can overwhelm users unfamiliar with project management jargon or complex functionalities. To mitigate this, the design will emphasize clarity and simplicity, focusing on essential tasks such as organization, progress tracking, and collaboration. By stripping away unnecessary complexity, the tools goal is to empower users, allowing them to manage their projects effectively from day one.

Accessibility will be the focus of this design, ensuring that users of all backgrounds and abilities can navigate the platform comfortably. Adjustable font sizes will allow users to tailor the text to their visual preferences, while high-contrast color schemes will enhance readability for those with visual impairments. Keyboard navigation will be integrated to support users who may find mouse interactions challenging, creating a more inclusive experience. Additionally, compatibility with screen readers will ensure that visually impaired users can access the full functionality of the tool, from task management to progress tracking.

Moreover, the user interface will feature straightforward navigation, with clear icons and labels that minimize confusion. To make the onboarding process smoother, i'm considering an interactive tutorial to guide users through the tool's functionalities, highlighting key features while allowing them to explore at their own pace. Tooltips will offer contextual help, providing users with instant assistance as they hover over various elements of the interface. By combining these features, the Simplified Approaches for Beginner PM tool will not only be intuitive but also engaging, fostering a sense of confidence among new project managers. Ultimately, this tool aspires to improve project management from a daunting task into an accessible, enjoyable experience.

* How do you plan to make your design interactive and engaging? - <i>Accessibility will be prioritized through adjustable font sizes, high-contrast color schemes, and keyboard navigation. The tool will also be compatible with screen readers, ensuring that users with different needs can effectively use the platform.</i>


### *Idea 2*
[Idea 2 - Project Milestone Tracker]
<img src="/Users/tvsmith/Documents/GitHub/pui-homework-template-REAL/Final Project/final-project/images/Idea2.png" alt="first idea">

The Project Milestone Tracker is designed specifically for beginners, focusing on creating an interactive and visually engaging experience that simplifies project management. A key aspect of this tool is its intuitive timeline, which visually represents project milestones and deadlines in a manner that is easy to comprehend. For beginners, seeing their progress mapped out over time can be highly motivating, helping them to stay focused and organized without feeling overwhelmed by details. Each milestone can be customized, allowing users to adapt the tracker to fit their unique projects and timelines.

Incorporating color-coded progress indicators will enhance this tool’s usability, providing immediate visual feedback on task status. For example, users can easily identify which tasks are on track, which are approaching their deadlines, and which are overdue. This clear differentiation through color can help beginners quickly assess where to direct their attention. Additionally, the use of helpful tooltips can enhance the user experience by providing explanations for each element, ensuring that users understand their options without needing extensive background knowledge in project management.

Furthermore, the Project Milestone Tracker will prioritize user engagement through gamification elements. Users will be encouraged to celebrate milestones, with notifications or badges awarded for completing tasks on time or achieving specific project goals. These features not only serve to motivate but also to build a sense of accomplishment, making project management feel more rewarding. The interactive nature of the tool will invite users to actively engage with their projects, rather than passively monitoring their progress. Overall, the Project Milestone Tracker goal is to simplify project management for beginners by combining visual clarity with interactive engagement, making the process less daunting and more enjoyable.


* How do you plan to make your design interactive and engaging? - <i>By featuring an intuitive timeline that visually displays milestones and deadlines, along with progress indicators to keep users motivated.</i>
…

### *Idea 3*
[Idea 3 - Project Achievements]
<img src="/Users/tvsmith/Documents/GitHub/pui-homework-template-REAL/Final Project/final-project/images/Idea3.png" alt="first idea">

The Project Achievements dashboard is crafted to offer beginners a clear and concise view of their project progress, performance metrics, and accomplishments. In a world where project management can often feel overwhelming, this dashboard provides a streamlined approach to understanding one’s status at a glance. It features a clean and organized layout that focuses on key metrics, such as completed tasks, milestones achieved, and overall project timelines. By presenting information in a straightforward manner, users can quickly assess how far they’ve come and what lies ahead.

To enhance user engagement and motivation, the dashboard will incorporate intuitive visuals such as progress bars and achievement badges. Progress bars will visually represent the completion status of tasks or entire projects, providing users with a quick reference point for their ongoing efforts. Achievement badges will serve as recognition for completed tasks, encouraging users to strive for milestones and celebrate their successes. This gamified approach not only fosters a sense of accomplishment but also helps users remain engaged in their projects, transforming what can be a tedious process into an enjoyable experience.

While designing the dashboard, it’s crucial to consider the potential for confusion among beginners. To address this, I will limit the number of metrics displayed at any one time, focusing on the most relevant information. Tooltips and explanatory icons will provide additional context without cluttering the interface. By carefully curating the information presented, the Project Achievements dashboard goal is to remain user-friendly while still offering valuable insights into performance. Ultimately, this tool aspires to support beginners in their project management journey, making tracking achievements an intuitive and motivating experience.

* How do you plan to make your design interactive and engaging? - <i>By using intuitive visuals like progress bars and achievement badges to keep users motivated and informed about their performance.</i>
…

## Feedback Summary

When sharing the project ideas, valuable feedback surfaced that highlighted both concerns and opportunities for improvement. For the Simplified Approaches for Beginners tool, some participants worried that its simplicity might alienate users looking for advanced features. This indicates the need for a balance between user-friendliness and functionality, ensuring that while beginners feel supported, the tool doesn’t become obsolete for more experienced users. The Project Milestone Tracker raised valid concerns about potentially overwhelming users with too many milestones; therefore, it’s essential to streamline the presentation of tasks and deadlines to maintain focus and clarity.

In the case of the Project Achievements Dashboard, feedback suggested that some metrics might be confusing for beginners. To address this, it would be important to limit the number of displayed metrics and ensure that each one is accompanied by clear explanations or examples. Overcomplicating features can detract from the user experience, particularly for those who are just starting in project management. Collectively, this feedback emphasizes the importance of user testing and iterative design processes, allowing us to refine these tools based on real user experiences and needs.

## Feedback Digestion

To effectively address the feedback received, a focused approach will be taken, particularly on one tool idea—specifically, the Simplified Approaches for Beginners project management tool. This tool will be further developed to ensure that its visual elements are not overwhelming and that the user experience remains approachable. By simplifying the interface and carefully selecting features, we can create a tool that caters specifically to beginners while still offering enough functionality to remain relevant as users grow in their project management skills. User feedback will be continuously sought and integrated into the design process, allowing for iterative improvements that enhance usability and overall satisfaction. This responsive approach will help ensure that the final product is not only user-friendly but also adaptable to the evolving needs of its users.

[def]: images/idea2