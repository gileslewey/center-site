//**********************************************************************************
//story variables
//**********************************************************************************

const individualPreview = document.getElementById('individual-preview');
const individual = document.getElementById('individual');
const storyIndividual = document.getElementById('story-individual');

const teamPreview = document.getElementById('team-preview');
const team = document.getElementById('team');
const storyTeam = document.getElementById('story-team');

const leadershipPreview = document.getElementById('leadership-preview');
const leadership = document.getElementById('leadership');
const storyLeadership = document.getElementById('story-leadership');

const strategicPreview = document.getElementById('strategic-preview');
const strategic = document.getElementById('strategic');
const storyStrategic = document.getElementById('story-strategic');
//**********************************************************************************
//story function
//**********************************************************************************




storyIndividual.addEventListener("click", function()
    { if (individualPreview.style.display == 'block') {
      individualPreview.style.display = 'none';
      individual.style.display = 'block'
    } else {
      individual.style.display = 'none'
      individualPreview.style.display = 'block';
    }
    });

storyTeam.addEventListener("click", function()
    { if (teamPreview.style.display == 'block') {
      teamPreview.style.display = 'none';
      team.style.display = 'block'
    } else {
      team.style.display = 'none'
      teamPreview.style.display = 'block';
    }
    });

storyLeadership.addEventListener("click", function()
    { if (leadershipPreview.style.display == 'block') {
      leadershipPreview.style.display = 'none';
      leadership.style.display = 'block'
    } else {
      leadership.style.display = 'none'
      leadershipPreview.style.display = 'block';
    }
    });

storyStrategic.addEventListener("click", function()
    { if (strategicPreview.style.display == 'block') {
      strategicPreview.style.display = 'none';
      strategic.style.display = 'block'
    } else {
      strategic.style.display = 'none'
      strategicPreview.style.display = 'block';
    }
    });
