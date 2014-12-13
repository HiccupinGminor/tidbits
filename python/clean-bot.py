#!/usr/bin/python
import math

# A naive solution to HackerRank's botclean challenge: https://www.hackerrank.com/challenges/botclean

def findAllDirt(row_position, col_position, board):
    dirt_locations = {}
    
    i = 0
    for row in board:
        j = 0
        for col in row:
            if col == "d":
                #Calculate the dirt's "score"
                score = abs(row_position - i) + abs(col_position - j)
                dirt_locations[i,j] = score
            j += 1    
        i += 1

    return dirt_locations

def findNearestDirt(posr, posc, board):
    return min(findAllDirt(posr, posc, board))

def nextMove(posr, posc, board):
    nearest_dirt = findNearestDirt(posr, posc, board)
    
    dirt_row = nearest_dirt[0]
    dirt_col = nearest_dirt[1]
    
    #If on top of the dirt
    if (dirt_row - posr == 0) and (dirt_col - posc == 0):
        print "CLEAN"
    elif dirt_row - posr != 0:
        if(dirt_row - posr > 0):
            print "DOWN"   
        else:
            print "UP"
    else:
        if(dirt_col - posc > 0):
            print "RIGHT"
        else:
            print "LEFT"
            
if __name__ == "__main__":
    pos = [int(i) for i in raw_input().strip().split()]
    board = [[j for j in raw_input().strip()] for i in range(5)]
    nextMove(pos[0], pos[1], board)
