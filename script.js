function createIssue() {
    const issueTitle = document.getElementById('issueTitle').value.trim();
    const issueDescription = document.getElementById('issueDescription').value.trim();
    if (issueTitle && issueDescription) {
        const issues = document.querySelector('.issues');
        const newIssue = document.createElement('div');
        newIssue.classList.add('issue');
        newIssue.innerHTML = `
            <div class="issue-header">
                <h3>${issueTitle}</h3>
                <span>Status: Open</span>
            </div>
            <div class="issue-body">
                <p>${issueDescription}</p>
            </div>
            <div class="issue-footer">
                <button onclick="closeIssue(this)">Close Issue</button>
                <button onclick="deleteIssue(this)">Delete Issue</button>
            </div>
        `;
        issues.appendChild(newIssue);
        document.getElementById('issueTitle').value = '';
        document.getElementById('issueDescription').value = '';
    }
}

function closeIssue(element) {
    const issue = element.parentElement.parentElement.parentElement;
    const status = issue.querySelector('.issue-header span');
    status.textContent = 'Status: Closed';
}

function deleteIssue(element) {
    const issue = element.parentElement.parentElement.parentElement;
    issue.remove();
}

function toggleTheme() {
    const body = document.body;
    const container = document.querySelector('.container');
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';

    if (currentTheme === 'dark') {
        body.classList.remove('dark-theme');
        container.style.backgroundColor = '#fff';
        container.style.color = '#333';
    } else {
        body.classList.add('dark-theme');
        container.style.backgroundColor = '#444';
        container.style.color = '#fff';
    }
}