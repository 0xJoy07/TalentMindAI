from agents.candidate_agent import rank_candidates
from agents.learning_agent import get_learning_path
from agents.assessment_agent import assess_readiness


def run_workflow(
    job,
    role,
    score,
    hours,
    candidates
):

    ranking = rank_candidates(
        job,
        candidates
    )

    learning = get_learning_path(
        role
    )

    assessment = assess_readiness(
        score,
        hours
    )

    return {
        "candidate_ranking": ranking,
        "learning_path": learning,
        "assessment": assessment
    }