WOD-HOW-TO-Series:
In the workshops-on-demand project,  a few images are needed:
* Speaker's image related to a given workshop:
The speaker image is currently hosted on the frontend server itself under the following path:
static/img/wod/SpeakerImages  which becomes /img/wod/SpeakerImages/Denis.png in the database
Simply upload the image there.
* Social Card Workshop Image related to a given workshop:
These are used in emails sent to participants. They can also be used to promote wod on SO-ME.
A url is used in the workshop table under the workshopImg field:
We leverage images.grommet.io but you can use your own frontend server to also host these images.
A simple naming convention: file name for the card should start with WOD-followed by the name of the workshop using '-' to link words

* Badge Image related to a given workshop:
These are used in emails sent to participants. They can also be used to promote wod on SO-ME.
A url is used in the workshop table under the badgeImg field:
We leverage images.grommet.io but you can use your own frontend server to also host these badges.
A simple naming convention: file name for the badge should onlycontain the name of the workshop using '-' to link words

* Building the image:
** resolution has to be  1280 * 720
** type jpg 

Naming convention : WOD-workshop-title (use  -  to link words)

* Building Badges: 
Badges are created in figma but you can create them with gimp too.

** bagde specs:
** resolution 1900*950
** type jpeg
