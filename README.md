# Comprehensive Real-World Coding Challenge for New Engineers

Welcome to the coding challenge repository designed for prospective engineers. This challenge aims to assess your technical skills and familiarity with the React, Python, AWS Lambda, DynamoDB tech stack through a practical, real-world coding task.

## About the Challenge

The core of this challenge is a simple Todo application that reflects the design and architectural patterns of a serverless solution, incorporating a DynamoDB abstraction layer with clearly defined entity, repository, and service classes.

This challenge is not just about coding but understanding and working within a defined architecture, demonstrating best practices, and showcasing your ability to extend existing codebases thoughtfully and efficiently.

### Getting Started

1. **Clone the Repository**: Begin by cloning this repository to your local machine. Ensure you have all the necessary tools and environments set up to run a React application and interact with DynamoDB.

2. **Set Up Your Environment**: Follow the setup instructions included in the project (./frontend/README.md, ./backend/README.md) to get the application running locally. This might involve installing dependencies, configuring a local database, or setting up environment variables.

3. **Familiarize Yourself with the Codebase**: Take some time to understand the existing code, focusing on the design patterns used and how the application's components interact with the database.

## Feature Request

### Implement an Activity Feed for Todo Item Creations and Updates

```
As a user,
I want an activity feed that shows all creations and updates of todo items,
So that I can view all activities across todo lists in one place.
```

**Acceptance Criteria**

1. **Activity Feed Visibility:**
    Given I am a user of the todo application,
    When I navigate to the designated activity feed page,
    Then I should see an activity feed displaying all recent activities, including creations and updates of todo items across all lists.

2. **Activity Details:**
    Given I am viewing the activity feed,
    Each activity entry should include the todo item's title, the type of activity (creation or update), and the date and time of the activity.

3. **Chronological Order:**
    Given new activities are occurring,
    When I am on the activity feed page,
    Then the activities should be listed in reverse chronological order, with the most recent activities appearing first.

### Your Task

- Implement `FeedContainer.tsx` and any/all necessary functions and components
- Implement any/all necessary backend endpoints, functions, and data model updates
- Use existing utils, helpers, and design patterns to build the solution.
- Consider the impact on performance and the user experience, particularly with scale and assume there may be 1000s or more lists and items.

## Submission Guidelines

- **Complete the Feature**: Implement the feature as described in the Feature Request section. Your code should align with the existing architecture and coding standards of the project.

- **Open a Pull Request**: Once you've completed your feature, open a pull request against this repository. Include a comprehensive description of the changes you've made and any other relevant information.

## Evaluation Criteria

Your submission will be evaluated based on the following criteria:

- **Functionality**: Your feature works as requested and integrates seamlessly with the existing application.
- **Code Quality**: Your code is clean, well-organized, and follows best practices.
- **Architecture Alignment**: Your implementation aligns with the project's existing architecture and design patterns.
