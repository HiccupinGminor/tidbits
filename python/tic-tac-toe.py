class Renderer:
    def render(self, board):
        print '------'
        for y in board:
            for x in y:
                print x,
            print ''
        print '------'

class Game:
    def __init__(self, renderer):
        self.renderer = renderer
        self.isEnded = False
        self.numMoves = 0
        self.board = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-'],
        ]
        self.winner = None
        self.currentPlayer = 'O'

    def start(self):
        while not self.isEnded:
            self._move()

        if self.winner:
            print "Game Over. " + self.winner + " is the winner!"
        else:
            print "Game Over. Cat's Game :("

    def _move(self):
        print self.currentPlayer + " player's turn:"

        x = int(raw_input("Enter your x-coordinate: "))
        y = int(raw_input("Enter your y-coordinate: "))

        if self._isValidMove(x, y) is False:
            self._move()
            return False

        self.board[y][x] = self.currentPlayer
        self.renderer.render(self.board)
        self.numMoves += 1
        self._referee(x, y)
        self._switchPlayers()

    def _referee(self, x, y):
        if self.numMoves is 9:
            self.isEnded = True

        if self._hasBeenWon(x, y):
            self.isEnded = True
            self.winner = self.currentPlayer

    def _switchPlayers(self):
        if self.currentPlayer is 'X':
            self.currentPlayer = 'O'
        else:
            self.currentPlayer = 'X'

    def _isValidMove(self, x, y):
        if (not 0 <= x <= 2) or (not 0 <= y <= 2):
            print "Not a valid position"
            return False

        if self.board[y][x] is not '-':
            print "That space has already been played"
            return False

    def _hasBeenWon(self, x, y):
        if len(set(self.board[y])) == 1:
            return True

        elif len(set([self.board[0][x], self.board[1][x], self.board[2][x]])) == 1:
            return True

        elif len(set([self.board[0][0], self.board[1][1], self.board[2][2]])) == 1 and self.board[0][0] is not '-':
            return True

        elif len(set([self.board[0][2], self.board[1][1], self.board[2][0]])) == 1 and self.board[0][2] is not '-':
            return True

game = Game(Renderer())
game.start()
