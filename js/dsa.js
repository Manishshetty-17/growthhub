const arraysQuestions = [

{
q: "Find the Largest Element in an Array",
a: `class Solution {

    public int largest(int[] arr) {

        int max = arr[0];

        for(int i = 1; i < arr.length; i++) {

            if(arr[i] > max) {
                max = arr[i];
            }
        }

        return max;
    }
}`
},

{
q: "Find the Second Largest Element in an Array",
a: `class Solution {

    public int secondLargest(int[] arr) {

        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        for(int num : arr) {

            if(num > largest) {

                secondLargest = largest;
                largest = num;
            }
            else if(num > secondLargest && num != largest) {

                secondLargest = num;
            }
        }

        return secondLargest;
    }
}`
},

{
q: "Check Whether the Array is Sorted in Ascending Order",
a: `class Solution {

    public boolean isSorted(int[] arr) {

        for(int i = 1; i < arr.length; i++) {

            if(arr[i] < arr[i - 1]) {
                return false;
            }
        }

        return true;
    }
}`
},

{
q: "Find the Missing Number from an Array Containing Numbers from 1 to N",
a: `class Solution {

    public int missingNumber(int[] arr, int n) {

        int expectedSum = n * (n + 1) / 2;

        int actualSum = 0;

        for(int num : arr) {
            actualSum += num;
        }

        return expectedSum - actualSum;
    }
}`
},

{
q: "Find the Maximum Sum of Any Contiguous Subarray (Kadane's Algorithm)",
a: `class Solution {

    public int maxSubArray(int[] nums) {

        int currentSum = nums[0];
        int maxSum = nums[0];

        for(int i = 1; i < nums.length; i++) {

            currentSum = Math.max(nums[i],
                                  currentSum + nums[i]);

            maxSum = Math.max(maxSum,
                              currentSum);
        }

        return maxSum;
    }
}`
}

];
const linkedListQuestions = [

{
q: "Reverse a Singly Linked List and Return the New Head",
a: `class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function reverseList(head) {

    let prev = null;
    let curr = head;

    while (curr !== null) {

        let nextNode = curr.next;

        curr.next = prev;

        prev = curr;
        curr = nextNode;
    }

    return prev;
}`
},

{
q: "Find the Middle Node of a Linked List",
a: `function middleNode(head) {

    let slow = head;
    let fast = head;

    while (fast !== null &&
           fast.next !== null) {

        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}`
},

{
q: "Detect Whether a Linked List Contains a Cycle",
a: `function hasCycle(head) {

    let slow = head;
    let fast = head;

    while (fast !== null &&
           fast.next !== null) {

        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}`
},

{
q: "Merge Two Sorted Linked Lists into One Sorted Linked List",
a: `function mergeTwoLists(list1, list2) {

    let dummy = {
        val: -1,
        next: null
    };

    let current = dummy;

    while (list1 !== null &&
           list2 !== null) {

        if (list1.val < list2.val) {

            current.next = list1;
            list1 = list1.next;

        } else {

            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    if (list1 !== null) {
        current.next = list1;
    }

    if (list2 !== null) {
        current.next = list2;
    }

    return dummy.next;
}`
},

{
q: "Remove the Nth Node From the End of a Linked List",
a: `function removeNthFromEnd(head, n) {

    let dummy = {
        val: 0,
        next: head
    };

    let first = dummy;
    let second = dummy;

    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    while (first !== null) {

        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;

    return dummy.next;
}`
}

];
const stringsQuestions = [

{
q: "Reverse a String Without Using Built-in Reverse Functions",
a: `function reverseString(str) {

    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {

        reversed += str[i];
    }

    return reversed;
}`
},

{
q: "Check Whether a String is a Palindrome",
a: `function isPalindrome(str) {

    let left = 0;
    let right = str.length - 1;

    while (left < right) {

        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}`
},

{
q: "Find the First Non-Repeating Character in a String",
a: `function firstNonRepeatingChar(str) {

    let count = {};

    for (let char of str) {

        count[char] = (count[char] || 0) + 1;
    }

    for (let char of str) {

        if (count[char] === 1) {
            return char;
        }
    }

    return null;
}`
},

{
q: "Count the Number of Vowels Present in a String",
a: `function countVowels(str) {

    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {

        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}`
},

{
q: "Check Whether Two Strings are Anagrams of Each Other",
a: `function isAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    let sorted1 = str1
        .split("")
        .sort()
        .join("");

    let sorted2 = str2
        .split("")
        .sort()
        .join("");

    return sorted1 === sorted2;
}`
}

];
const stackQuestions = [

{
q: "Implement a Stack using Java's built-in Stack class. Push elements 10, 20, and 30 into the stack and print the top element.",
a: `import java.util.Stack;

public class Main {
    public static void main(String[] args) {

        Stack<Integer> stack = new Stack<>();

        stack.push(10);
        stack.push(20);
        stack.push(30);

        System.out.println("Top Element: " + stack.peek());
    }
}`
},

{
q: "Check whether the given string of parentheses is balanced. Example: ()[]{} should return true.",
a: `import java.util.Stack;

class Solution {
    public boolean isValid(String s) {

        Stack<Character> stack = new Stack<>();

        for(char ch : s.toCharArray()) {

            if(ch == '(' || ch == '{' || ch == '[') {
                stack.push(ch);
            }
            else {

                if(stack.isEmpty()) {
                    return false;
                }

                char top = stack.pop();

                if((ch == ')' && top != '(') ||
                   (ch == '}' && top != '{') ||
                   (ch == ']' && top != '[')) {
                    return false;
                }
            }
        }

        return stack.isEmpty();
    }
}`
},

{
q: "Reverse a String using a Stack. Example: 'hello' becomes 'olleh'.",
a: `import java.util.Stack;

class Solution {
    public String reverseString(String s) {

        Stack<Character> stack = new Stack<>();

        for(char ch : s.toCharArray()) {
            stack.push(ch);
        }

        String result = "";

        while(!stack.isEmpty()) {
            result += stack.pop();
        }

        return result;
    }
}`
},

{
q: "Design a Min Stack that supports push(), pop(), top(), and getMin() operations.",
a: `import java.util.Stack;

class MinStack {

    Stack<Integer> stack = new Stack<>();
    Stack<Integer> minStack = new Stack<>();

    public void push(int val) {

        stack.push(val);

        if(minStack.isEmpty() || val <= minStack.peek()) {
            minStack.push(val);
        }
    }

    public void pop() {

        if(stack.peek().equals(minStack.peek())) {
            minStack.pop();
        }

        stack.pop();
    }

    public int top() {
        return stack.peek();
    }

    public int getMin() {
        return minStack.peek();
    }
}`
},

{
q: "Evaluate a Postfix Expression. Example: '23*5+' should return 11.",
a: `import java.util.Stack;

class Solution {
    public int evaluatePostfix(String exp) {

        Stack<Integer> stack = new Stack<>();

        for(char ch : exp.toCharArray()) {

            if(Character.isDigit(ch)) {
                stack.push(ch - '0');
            }
            else {

                int b = stack.pop();
                int a = stack.pop();

                if(ch == '+') stack.push(a + b);
                if(ch == '-') stack.push(a - b);
                if(ch == '*') stack.push(a * b);
                if(ch == '/') stack.push(a / b);
            }
        }

        return stack.pop();
    }
}`
}

];
const queueQuestions = [

{
q: "Implement a Queue using Java's built-in Queue interface. Insert 10, 20, and 30 into the queue and print the front element.",
a: `import java.util.*;

public class Main {
    public static void main(String[] args) {

        Queue<Integer> queue = new LinkedList<>();

        queue.offer(10);
        queue.offer(20);
        queue.offer(30);

        System.out.println("Front Element: " + queue.peek());
    }
}`
},

{
q: "Implement a Queue using Two Stacks.",
a: `import java.util.Stack;

class MyQueue {

    Stack<Integer> s1 = new Stack<>();
    Stack<Integer> s2 = new Stack<>();

    public void enqueue(int x) {
        s1.push(x);
    }

    public int dequeue() {

        if(s2.isEmpty()) {

            while(!s1.isEmpty()) {
                s2.push(s1.pop());
            }
        }

        return s2.pop();
    }
}`
},

{
q: "Generate Binary Numbers from 1 to N using a Queue.",
a: `import java.util.*;

class Solution {

    public void generateBinary(int n) {

        Queue<String> queue = new LinkedList<>();

        queue.offer("1");

        for(int i = 1; i <= n; i++) {

            String current = queue.poll();

            System.out.print(current + " ");

            queue.offer(current + "0");
            queue.offer(current + "1");
        }
    }
}`
},

{
q: "Implement Circular Queue using an Array.",
a: `class CircularQueue {

    int[] arr;
    int front = -1;
    int rear = -1;
    int size;

    CircularQueue(int size) {
        this.size = size;
        arr = new int[size];
    }

    public void enqueue(int value) {

        if((rear + 1) % size == front) {
            System.out.println("Queue Full");
            return;
        }

        if(front == -1) front = 0;

        rear = (rear + 1) % size;
        arr[rear] = value;
    }

    public int dequeue() {

        int value = arr[front];

        if(front == rear) {
            front = rear = -1;
        } else {
            front = (front + 1) % size;
        }

        return value;
    }
}`
},

{
q: "Find the First Non-Repeating Character in a Stream of Characters.",
a: `import java.util.*;

class Solution {

    public void firstNonRepeating(String str) {

        Queue<Character> queue = new LinkedList<>();
        int[] freq = new int[26];

        for(char ch : str.toCharArray()) {

            freq[ch - 'a']++;
            queue.offer(ch);

            while(!queue.isEmpty() &&
                  freq[queue.peek() - 'a'] > 1) {
                queue.poll();
            }

            if(queue.isEmpty()) {
                System.out.print("-1 ");
            } else {
                System.out.print(queue.peek() + " ");
            }
        }
    }
}`
}

];
const treeQuestions = [

{
q: "Find the Height of a Binary Tree. The height is the number of nodes on the longest path from root to leaf.",
a: `class Solution {

    public int height(TreeNode root) {

        if(root == null) {
            return 0;
        }

        int leftHeight = height(root.left);
        int rightHeight = height(root.right);

        return 1 + Math.max(leftHeight, rightHeight);
    }
}`
},

{
q: "Perform Inorder Traversal of a Binary Tree. Inorder means Left → Root → Right.",
a: `class Solution {

    public void inorder(TreeNode root) {

        if(root == null) {
            return;
        }

        inorder(root.left);

        System.out.print(root.val + " ");

        inorder(root.right);
    }
}`
},

{
q: "Check whether two Binary Trees are identical. Two trees are identical if they have the same structure and same values.",
a: `class Solution {

    public boolean isSameTree(TreeNode p, TreeNode q) {

        if(p == null && q == null) {
            return true;
        }

        if(p == null || q == null) {
            return false;
        }

        if(p.val != q.val) {
            return false;
        }

        return isSameTree(p.left, q.left)
            && isSameTree(p.right, q.right);
    }
}`
},

{
q: "Find the Maximum Value present in a Binary Tree.",
a: `class Solution {

    public int findMax(TreeNode root) {

        if(root == null) {
            return Integer.MIN_VALUE;
        }

        int leftMax = findMax(root.left);
        int rightMax = findMax(root.right);

        return Math.max(root.val,
               Math.max(leftMax, rightMax));
    }
}`
},

{
q: "Check whether a Binary Tree is Balanced. A tree is balanced if the height difference between left and right subtrees is at most 1.",
a: `class Solution {

    public boolean isBalanced(TreeNode root) {

        if(root == null) {
            return true;
        }

        int leftHeight = height(root.left);
        int rightHeight = height(root.right);

        if(Math.abs(leftHeight - rightHeight) > 1) {
            return false;
        }

        return isBalanced(root.left)
            && isBalanced(root.right);
    }

    private int height(TreeNode root) {

        if(root == null) {
            return 0;
        }

        return 1 + Math.max(
            height(root.left),
            height(root.right)
        );
    }
}`
}

];
const graphQuestions = [

{
q: "Number of Islands (DFS Traversal)",
a: `class Solution {

    public int numIslands(char[][] grid) {

        int count = 0;

        for(int i=0;i<grid.length;i++){
            for(int j=0;j<grid[0].length;j++){

                if(grid[i][j] == '1'){
                    dfs(grid, i, j);
                    count++;
                }
            }
        }

        return count;
    }

    private void dfs(char[][] grid, int r, int c){

        if(r < 0 || c < 0 ||
           r >= grid.length ||
           c >= grid[0].length ||
           grid[r][c] == '0'){
            return;
        }

        grid[r][c] = '0';

        dfs(grid, r+1, c);
        dfs(grid, r-1, c);
        dfs(grid, r, c+1);
        dfs(grid, r, c-1);
    }
}`
},

{
q: "Detect Cycle in Undirected Graph",
a: `class Solution {

    public boolean isCycle(int V, ArrayList<ArrayList<Integer>> adj) {

        boolean[] visited = new boolean[V];

        for(int i=0;i<V;i++){

            if(!visited[i]){
                if(dfs(i, -1, visited, adj))
                    return true;
            }
        }

        return false;
    }

    private boolean dfs(int node,
                        int parent,
                        boolean[] visited,
                        ArrayList<ArrayList<Integer>> adj){

        visited[node] = true;

        for(int nbr : adj.get(node)){

            if(!visited[nbr]){

                if(dfs(nbr, node, visited, adj))
                    return true;
            }
            else if(nbr != parent){
                return true;
            }
        }

        return false;
    }
}`
},

{
q: "Breadth First Search (BFS Traversal)",
a: `class Solution {

    public ArrayList<Integer> bfsOfGraph(
            int V,
            ArrayList<ArrayList<Integer>> adj) {

        ArrayList<Integer> result =
                new ArrayList<>();

        boolean[] visited = new boolean[V];

        Queue<Integer> q = new LinkedList<>();

        q.offer(0);
        visited[0] = true;

        while(!q.isEmpty()){

            int node = q.poll();
            result.add(node);

            for(int nbr : adj.get(node)){

                if(!visited[nbr]){

                    visited[nbr] = true;
                    q.offer(nbr);
                }
            }
        }

        return result;
    }
}`
},

{
q: "Depth First Search (DFS Traversal)",
a: `class Solution {

    public ArrayList<Integer> dfsOfGraph(
            int V,
            ArrayList<ArrayList<Integer>> adj) {

        ArrayList<Integer> result =
                new ArrayList<>();

        boolean[] visited = new boolean[V];

        dfs(0, adj, visited, result);

        return result;
    }

    private void dfs(
            int node,
            ArrayList<ArrayList<Integer>> adj,
            boolean[] visited,
            ArrayList<Integer> result){

        visited[node] = true;
        result.add(node);

        for(int nbr : adj.get(node)){

            if(!visited[nbr]){
                dfs(nbr, adj, visited, result);
            }
        }
    }
}`
},

{
q: "Shortest Path in Binary Matrix (BFS)",
a: `class Solution {

    public int shortestPathBinaryMatrix(int[][] grid) {

        int n = grid.length;

        if(grid[0][0] == 1 || grid[n-1][n-1] == 1) {
            return -1;
        }

        Queue<int[]> queue = new LinkedList<>();

        queue.offer(new int[]{0, 0, 1});

        grid[0][0] = 1;

        int[][] directions = {
            {-1,-1}, {-1,0}, {-1,1},
            {0,-1},          {0,1},
            {1,-1},  {1,0},  {1,1}
        };

        while(!queue.isEmpty()) {

            int[] current = queue.poll();

            int row = current[0];
            int col = current[1];
            int distance = current[2];

            if(row == n-1 && col == n-1) {
                return distance;
            }

            for(int[] dir : directions) {

                int newRow = row + dir[0];
                int newCol = col + dir[1];

                if(newRow >= 0 && newCol >= 0 &&
                   newRow < n && newCol < n &&
                   grid[newRow][newCol] == 0) {

                    grid[newRow][newCol] = 1;

                    queue.offer(
                        new int[]{newRow, newCol, distance + 1}
                    );
                }
            }
        }

        return -1;
    }
}`
}

];
const dpQuestions = [

{
q: "Climbing Stairs - Find the number of distinct ways to reach the top",
a: `class Solution {

    public int climbStairs(int n) {

        if(n <= 2){
            return n;
        }

        int first = 1;
        int second = 2;

        for(int i = 3; i <= n; i++){

            int current = first + second;

            first = second;
            second = current;
        }

        return second;
    }
}`
},

{
q: "House Robber - Find the maximum money that can be robbed without robbing adjacent houses",
a: `class Solution {

    public int rob(int[] nums) {

        int prev1 = 0;
        int prev2 = 0;

        for(int money : nums){

            int take = money + prev2;
            int skip = prev1;

            int current = Math.max(take, skip);

            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }
}`
},

{
q: "Maximum Sum of Non-Adjacent Elements",
a: `class Solution {

    public int maxSum(int[] nums) {

        int include = 0;
        int exclude = 0;

        for(int num : nums){

            int newInclude = exclude + num;

            exclude = Math.max(include, exclude);

            include = newInclude;
        }

        return Math.max(include, exclude);
    }
}`
},

{
q: "Coin Change - Find the minimum number of coins required to make a given amount",
a: `class Solution {

    public int coinChange(int[] coins, int amount) {

        int[] dp = new int[amount + 1];

        Arrays.fill(dp, amount + 1);

        dp[0] = 0;

        for(int i = 1; i <= amount; i++){

            for(int coin : coins){

                if(coin <= i){

                    dp[i] = Math.min(
                        dp[i],
                        dp[i - coin] + 1
                    );
                }
            }
        }

        return dp[amount] > amount ? -1 : dp[amount];
    }
}`
},

{
q: "Longest Increasing Subsequence - Find the length of the longest increasing subsequence",
a: `class Solution {

    public int lengthOfLIS(int[] nums) {

        int n = nums.length;

        int[] dp = new int[n];

        Arrays.fill(dp, 1);

        int answer = 1;

        for(int i = 1; i < n; i++){

            for(int j = 0; j < i; j++){

                if(nums[i] > nums[j]){

                    dp[i] = Math.max(
                        dp[i],
                        dp[j] + 1
                    );
                }
            }

            answer = Math.max(answer, dp[i]);
        }

        return answer;
    }
}`
}

];
let currentIndex = 0;

/* OPEN TOPIC */
function openTopic(topic) {

    document.querySelector(".level-selection").style.display = "none";
    document.getElementById("dsa-box").classList.remove("hidden");

    if(topic === "arrays"){
        currentQuestions = arraysQuestions;
        document.getElementById("topic-title").innerText =
            "📦 Arrays - Interview Questions";
    }

    else if(topic === "linkedlist"){
        currentQuestions = linkedListQuestions;
        document.getElementById("topic-title").innerText =
            "🔗 Linked List - Interview Questions";
    }
else if(topic === "strings"){
    currentQuestions = stringsQuestions;
    document.getElementById("topic-title").innerText =
        "📝 Strings - Interview Questions";
}
else if(topic === "stack"){
    currentQuestions = stackQuestions;
    document.getElementById("topic-title").innerText =
        "📚 Stack - Interview Questions";
}

else if(topic === "queue"){
    currentQuestions = queueQuestions;
    document.getElementById("topic-title").innerText =
        "🚶 Queue - Interview Questions";
}
else if(topic === "trees"){
    currentQuestions = treeQuestions;
    document.getElementById("topic-title").innerText =
        "🌳 Trees - Interview Questions";
}
else if(topic === "graphs"){
    currentQuestions = graphQuestions;
    document.getElementById("topic-title").innerText =
        "🌐 Graphs - Interview Questions";
}
else if(topic === "dp"){
    currentQuestions = dpQuestions;
    document.getElementById("topic-title").innerText =
        "🧠 Dynamic Programming - Interview Questions";
}
    currentIndex = 0;
    showQuestion();
}

/* SHOW QUESTION */
function showQuestion() {

    const data = currentQuestions[currentIndex];

    document.getElementById("question-area").innerHTML = `
        <h3>Q${currentIndex + 1}: ${data.q}</h3>

        <button class="level-btn" onclick="toggleAnswer()">
            💡 Show Solution
        </button>

        <pre id="answer-box" class="hidden answer-box"></pre>

        <button onclick="nextQuestion()">Next</button>
        <button onclick="goBack()">Back</button>
    `;
}

/* TOGGLE ANSWER */
function toggleAnswer() {

    const box = document.getElementById("answer-box");

    if (box.innerText === "") {
        box.innerText = currentQuestions[currentIndex].a;
    }

    box.classList.toggle("hidden");
}

/* NEXT */
function nextQuestion() {

    currentIndex++;

    if (currentIndex >= currentQuestions.length) {
        alert("Topic Completed 🎉");
        currentIndex = 0;
    }

    showQuestion();
}

/* BACK */
function goBack() {

    document.querySelector(".level-selection").style.display = "block";
    document.getElementById("dsa-box").classList.add("hidden");
}