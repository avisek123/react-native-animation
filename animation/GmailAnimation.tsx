import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MotiView, useDynamicAnimation} from 'moti';

const GmailAnimation = () => {
  const animation = useDynamicAnimation(() => {
    return {
      width: 150,
      height: 50,
      backgroundColor: '#6264A7',
      borderRadius: 30,
    };
  });
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: '#6264A7',
        }}></View>
      <ScrollView
        style={{flex: 1}}
        onScroll={e => {
          const y = parseFloat(e.nativeEvent.contentOffset.y.toFixed(0));
          if (y > 30) {
            animation.animateTo({
              width: 50,
              height: 50,
              backgroundColor: '#6264A7',
              borderRadius: 25,
            });
          } else {
            animation.animateTo({
              width: 150,
              height: 50,
              backgroundColor: '#6264A7',
              borderRadius: 30,
            });
          }
        }}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque veli Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime mollitia, molestiae quas vel sint commodi repudiandae
          consequuntur voluptatum laborum numquam blanditiis harum quisquam eius
          sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident
          similique accusantium nemo autem. Veritatis obcaecati tenetur iure
          eius earum ut molestias architecto voluptate aliquam nihil, eveniet
          aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
          error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
          Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
          sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque veli Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime mollitia, molestiae quas vel sint commodi repudiandae
          consequuntur voluptatum laborum numquam blanditiis harum quisquam eius
          sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident
          similique accusantium nemo autem. Veritatis obcaecati tenetur iure
          eius earum ut molestias architecto voluptate aliquam nihil, eveniet
          aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
          error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
          Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
          sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque veli Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime mollitia, molestiae quas vel sint commodi repudiandae
          consequuntur voluptatum laborum numquam blanditiis harum quisquam eius
          sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident
          similique accusantium nemo autem. Veritatis obcaecati tenetur iure
          eius earum ut molestias architecto voluptate aliquam nihil, eveniet
          aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
          error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
          Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
          sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque veli Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime mollitia, molestiae quas vel sint commodi repudiandae
          consequuntur voluptatum laborum numquam blanditiis harum quisquam eius
          sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident
          similique accusantium nemo autem. Veritatis obcaecati tenetur iure
          eius earum ut molestias architecto voluptate aliquam nihil, eveniet
          aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
          error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
          Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
          sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque veli Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime mollitia, molestiae quas vel sint commodi repudiandae
          consequuntur voluptatum laborum numquam blanditiis harum quisquam eius
          sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident
          similique accusantium nemo autem. Veritatis obcaecati tenetur iure
          eius earum ut molestias architecto voluptate aliquam nihil, eveniet
          aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
          error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
          Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
          sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque veli Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime mollitia, molestiae quas vel sint commodi repudiandae
          consequuntur voluptatum laborum numquam blanditiis harum quisquam eius
          sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident
          similique accusantium nemo autem. Veritatis obcaecati tenetur iure
          eius earum ut molestias architecto voluptate aliquam nihil, eveniet
          aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
          error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
          Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
          sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque veli Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime mollitia, molestiae quas vel sint commodi repudiandae
          consequuntur voluptatum laborum numquam blanditiis harum quisquam eius
          sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident
          similique accusantium nemo autem. Veritatis obcaecati tenetur iure
          eius earum ut molestias architecto voluptate aliquam nihil, eveniet
          aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
          error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
          Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
          sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque veli
        </Text>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 90,
          right: 30,
        }}>
        <MotiView state={animation}></MotiView>
      </View>
    </View>
  );
};

export default GmailAnimation;

const styles = StyleSheet.create({});
