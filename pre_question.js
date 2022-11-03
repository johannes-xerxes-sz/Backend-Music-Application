//*! OWASP TOP 10 Open Web Application Security Project

//? 1. Broken Access Control
    /*
Broken access control consists of multiple possible attack vectors such as 
    1. bypassing access control checks,
    2. editing other user’s accounts, 
    3. elevation of privileges, 
    4. CORS misconfigurations which allow unauthorized access to restricted APIs.
This metadata manipulation through access control tokens like JSON Web Tokens (JWT) or access unauthorized web pages as a underprivileged 
user which can lead to attackers control business functions or possibility obtaining all data.
    */
//? 2. Cryptographic Failures
    /*
Attackers often target sensitive data, such as passwords, credit card numbers, and personal information, when you do not properly protect them.
this occurs when
    1. Store or transit data in clear text and unhashed (most common)
    2. Protect data with an old or weak encryption
    3. Improperly filter or mask data in transit
    */
//? 3. Injections
    /*
Injection attacks occur when attackers find
weaknesses in input validation and enter untrusted inputs examples such as 
    1. SQL injection, 
    2. NoSQL injection, 
    3. OS injection,
    4. LDAP injection, 
this occur when untrusted data gets processed by the web application and alters
the intended execution of the backend processing without proper authorization.
    */
//? 4. Insecure Design
    /*
Insecure design is focused on the risks associated with flaws in design and architecture.
It focuses on the need for 
    1. threat modeling, 
    2. secure design patterns, 
    3. principles
    
    */
//? 5. Security Misconfigurations
    /*
Web applications that have been misconfigured in such a way that is leaving them exposed to security threats. They can include 
    1. firewall misconfigurations,
    2. open administration ports that expose the application to remote attacks, or
    3. legacy applications that are trying to communicate with applications that do not exist anymore
Misconfiguration vulnerabilities make your application susceptible to attacks that target any part of the application stack.
    */
//? 6. Vulnerable and Outdated Components
    /*
A software component is part of a system or application that extends the functionality of the application, such as a module, software package, or API. 
examples such as
    1. Code injection
    2. Buffer overflow
    3. Command injection
    4. Cross-site scripting (XSS)
Component-based vulnerabilities occur when a software component is unsupported, out of date, or vulnerable to a known exploit.
    */
//? 7. Identification and Authentication Flaws
    /*
Identification and authentication failures can occur when functions related to a user's identity, 
authentication, or session management are not implemented correctly or not adequately protected by an application.
Attackers use a range of techniques to exploit broken authentication, including the following:
    1. Brute force/credential stuffing
    2. Session hijacking
    3. Session fixation
    4. Cross Site Request Forgery (CSRF)
    5. Execution After Redirect (EAR)
    6. One-click attack
Attackers may be able to exploit identification and authentication failures by compromising 
passwords, keys, session tokens, or exploit other implementation flaws to assume other users' identities, either temporarily or permanently.    
*/
//? 8. Software and Data Integrity Failures
    /*
Software and data integrity failures relate to code and infrastructure that does not protect against integrity violations.
Attackers can exploit this to potentially introduce unauthorized access, malicious code, or system compromise as part of the following attacks:
    1. Cache Poisoning
    2. Code injection
    3. Command execution
    4. Denial of Service
This can occur when you use software from untrusted sources and repositories or even software that has been tampered with at the source, in transit, or even the endpoint cache.
    */
//? 9. Security Logging and Monitoring Flaws
    /*
Failure to sufficiently log, monitor, or report security events, such as login attempts, 
makes suspicious behavior difficult to detect and significantly raises the likelihood that an attacker can successfully exploit your application.
Unmonitored activities may results attacks such as:
    1. Code injection,
    2. Buffer overflow,
    3. Command injection
Insufficient logging, monitoring, or reporting makes your application susceptible to attacks that target any part of the application stack
    */
//? 10. Server-Side Request Forgery (SSRF)
    /*
This occurs when a web application is retrieving from a unknown source or domain without checking and validating the user supplied URL,
Attacks can result in the following:
    1. Exposure and theft of data that may include sensitive personal or corporate information
    2. Unauthorized manipulation of sensitive data
    3. Hijack of a vulnerable system to use its trust relationship with other systems to launch further attacks
the attacker abuses the functionality on the server to read or update internal resources. 
    */


//*! 2. In 2-3 sentences, please explain what NoSQL Injection is and a solution. 
/* 
A NoSQL injection, similar to that of a SQL injection, can allow attackers to bypass authentication, 
exfiltrate sensitive data, tamper with data on the database, or even compromise the database and the underlying server.
The best way to prevent NoSQL injection attacks is to avoid using raw user input in your application code, and install packages that would help.
*/
//*! 3. In 2-3 sentences, please explain what cross site scripting is and a solution. 
/* 
Attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user.
Cross-site scripting vulnerabilities normally allow an attacker to masquerade as a victim user, 
to carry out any actions that the user is able to perform, and to access any of the user's data.
Validate to catch potentially malicious user-provided input and encode output to prevent potentially malicious user-provided data from triggering automatic 
load-and-execute behavior by a browser.
*/
//*! 4. In 2-3 sentences, please explain what rate limiting is and a solution. 
/* 
Rate limiting is often employed to stop bad bots from negatively impacting a website or application. 
Best solution is basically just API rate limiting or measures the amount of time between each request from each IP address, 
and also measures the number of requests within a specified timeframe
*/
//*! 5. In 2-3 sentences, please explain what CORS is and a solution. 
/* 
Allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources or sending
a preflight request.
Implement CORS properly so that it can prevent the hacker to send a request to the target
*/

