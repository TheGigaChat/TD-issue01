ISSUE!

description of issue:
If you run code into browser and click on any place, you will see a coombat logic in the console. 
I have defender, who attack the enemy, when defender.shooting property === true. 
I have enemy, who attack the defender, when enemy.movement property === 0. // Don't think why so strange, eventually logic of .shooting and .movement the same.
I have 1 defender and 2 enemies. When defender dies, only first enemy.movement changes, but second enemy continue to attack the died enemy, becouse second enemy.movement property still equal 0.

GOAL!

description of goal:
When defender dies, first and second enemy.movement have to changes, not oonly first enemy.movement.
