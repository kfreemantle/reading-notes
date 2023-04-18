# Class 08: RBAC

### Code review, lecture and reading notes


#### Assigned Reading Answers

- What is Role Based Access Control (RBAC) and why do we care?

> It's the method of assigning access and permissions for systems to users based on their role/responsibilities within an organization.

- Describe a Role/Permission hierarchy that you might implement using RBAC.

> For any given node of a system, I would assign minimum viable permissions to anyone who needs access to that system and document the everloving crap out of who has access to what.  Audits would be regular.

- What approach might you take to implement RBAC?

> I would start with the system, figure out which roles and permissions are needed to support that system, and assign those permissions in as limited a way as possible as new users/administrators are added to the organization.

- If Authentication is “you are who you say you are,” what is Authorization?

> Do you have permission to be here doing what you're doing?

- Name three primary rules defined for RBAC.

> Role assignment: A subject can exercise a permission only if the subject has selected or been assigned a role.
> Role authorization: A subject's active role must be authorized for the subject. With rule 1 above, this rule ensures that users can take on only roles for which they are authorized.
> Permission authorization: A subject can exercise a permission only if the permission is authorized for the subject's active role. With rules 1 and 2, this rule ensures that users can exercise only permissions for which they are authorized.

- Describe RBAC to a non-technical friend.

> RBAC is just a way of giving people exactly as much access to a system as they need to do their job.  So because it's based on their role, a person is limited to accessing only the resources they need and nothing more.  The benefit is it minimizes systemic risk by keeping the opportunities for failure to a minimum.

- What Are access rights Associated with? The User? or The Role? Explain.

> The role.  Users don't matter as much as what they can do.  Roles may change and users may have more than one role, so access is assigned based on what they're trying to accomplish and what they're ALLOWED to try and accomplish.

- Access Rights, or Authorization, is activated after a user successfully does what?

> Gets assigned a role.

- Explain how RBAC might benefit a business.

> Among other things like increased security, it allows businesses to not have to modify policy based on entry/exit of employees.

#### Code Review, Lecture Notes, Reading notes

- 0948: code review

- 1045: access control lecture begins

- 

##### Things I want to know more about

- 