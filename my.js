$(document).ready(function(){

    // add creators to select
    creators.forEach((element) => {
        let option = 
        `<option creator_id="`+element['id']+`">
            `+element['name']+`
        </option>`;

        $('#creator').append(option);
    })

    // add options to select
    question_types.forEach((element) => {
        let option = 
        `<option question_id="`+element['id']+`" type="`+element['type']+`">
            `+element['name']+`
        </option>`;

        $('#question_type').append(option);
    })

});

function opacityFadeIn(element, duration){
    $(element).animate({ opacity: 1 }, duration);
}

function opacityFadeOut(element, duration){
    $(element).animate({ opacity: 0 }, duration);
}

$(document).on('change', '#question_type', function(){

    let selected = $(this).find('option:selected');

    let type = selected.attr('type');

    if(type == 1){
        opacityFadeOut('.top_5_answer', 200)
        opacityFadeIn('.not_top_5_answer', 200)
    }
    else if(type == 2){
        opacityFadeOut('.not_top_5_answer', 200)
        opacityFadeIn('.top_5_answer', 200)
    }

});

$(document).on('click', '#add_question', function(){

    let creator = $('#creator').val();
    let question_type = $('#question_type').val();
    let question_type_id = $('#question_type').find('option:selected').attr('type');
    let question = $('#question').val();
    let points = $('#points').val();

    let answer = {};
    if(question_type_id == 1){
        answer['answer'] = $('#correct_answer').val();
        answer['50-50'] = $('#50_50_answer').val();
    }
    else if(question_type_id == 2){
        answer['1'] = $('#answer_1').val();
        answer['2'] = $('#answer_2').val();
        answer['3'] = $('#answer_3').val();
        answer['4'] = $('#answer_4').val();
        answer['5'] = $('#answer_5').val();
    }

    let question_json = {
        'creator' : creator,
        'question_type' : question_type,
        'question_type_id' : question_type_id,
        'question' : question,
        'points' : points,
        'answer' : answer,
    }

    questions.push(question_json);

});