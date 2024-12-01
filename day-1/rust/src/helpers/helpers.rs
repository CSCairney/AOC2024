use crate::constants::dev::DEV_MODE;
use crate::types::types::InputPair;

pub fn value_sort(data: &[InputPair]) -> Vec<InputPair> {
    let (mut sorted_first, mut sorted_second): (Vec<i32>, Vec<i32>) = data
        .iter()
        .map(|pair| (pair.value_one, pair.value_two))
        .unzip();

    sorted_first.sort_unstable();
    sorted_second.sort_unstable();

    if DEV_MODE {
        println!("Sorted First List: {:?}", sorted_first);
        println!("Sorted Second List: {:?}", sorted_second);
    }

    let sorted: Vec<InputPair> = sorted_first
        .into_iter()
        .zip(sorted_second.into_iter())
        .map(|(value_one, value_two)| InputPair { value_one, value_two })
        .collect();

    if DEV_MODE {
        println!("Value Sort: {:?}", sorted);
    }

    sorted
}

