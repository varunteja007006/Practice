# STRIDE

STRIDE threat modeling is an approach to integrating earlier in your software development lifecycle
(SDLC). You can also come back to the STRIDE framework anytime while your application is being
developed or in production, and every time you release new code to see how it will affect your
application's overall attack vector.

### Spoofing Identity

Identify spoofing occurs when the hacker pretends to be another person, assuming the identity and information in that identity to commit fraud. A very common example of this threat is when an email is sent from a false email address, appearing to be someone else (also called a phishing attack).

### Tampering with Data

Data tampering occurs when data or information is changed without authorization. Ways that a bad actor can execute tampering could be through changing a configuration file to gain system control, inserting a malicious file, or deleting/modifying a log file.

### Repudiation threats

Repudiation threats happen when a bad actor performs an illegal or malicious operation in a system and then denies their involvement with the attack. In these attacks, the system lacks the ability to actually trace the malicious activity to identify a hacker.

### Information Disclosure

Information disclosure is also known as information leakage. It happens when an application or website unintentionally reveals data to unauthorized users. This type of threat can affect the process, data flow and data storage in an application.

### Denial of Service (Dos)

Denial of Service (DoS) attacks restrict an authorized user from accessing resources that they should be able to access. This affects the process, data flow and data storage in an application.

### Elevation of privileges

Through the elevation of privileges, an authorized or unauthorized user in the system can gain access to other information that they are not authorized to see. An example of this attack could be as simple as a missed authorization check, or even elevation through data tampering where the attacker modifies the disk or memory to execute non-authorized commands.

### Conclusion

Threat modelling is done so has to identify the locations of potential security vulnerabilities.

Several others are also available including PASTA, VAST, Trike, OCTAVE, and NIST. Choose the one
that most closely aligns with your goals.

Threat model is a living document and needs to be constantly reviewed and updated. After a system
wide threat model has been performed it can be valuable to perform mini threat models as a secure
engineering design requirement.

#### Reference:

https://www.softwaresecured.com/post/stride-threat-modeling
